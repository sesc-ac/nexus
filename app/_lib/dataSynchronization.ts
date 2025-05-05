'use server'

import { Product, Sale } from "@prisma/client";
import { createProduct, getProductByLegacyId } from "../_data-access/product";
import { findOrCreateSale } from "../_data-access/sale";
import { createSaleItem } from "../_data-access/saleItem";
import { parseLocaleNumber } from "../_utils/dataFormat";

const dataSyncURL = process.env.DATA_SYNC_URL as string;

const headers = new Headers();
headers.append('DATA-SYNC-KEY', process.env.DATA_SYNC_KEY as string);

type fetchedProduct = {
    CDUNIDADE: string,
    DSPRODUTO: string,
}

type fetchedSale = {
    CDPESSOA: string,
    DTVENDA: string,
    HRVENDA: string,
    SQCAIXA: string,
    SQVENDA: string,
    VLRECEBIDO: string,
}

type fetchedSaleItem = {
    CDPESSOA: string,
    CDPRODUTO: string,
    QTPRODUTO: string,
    VLITEM: string,
    VLRECEBIDO: string,
}

async function fetchLegacyData(requestData: FormData){
    const response = await fetch(dataSyncURL, {
        body: requestData,
        headers: headers,
        method: 'POST'
    });

    if(!response.ok)
        throw new Error('Erro na sincronização dos dados.');

    const data = await response.json();

    return data;
}

async function fetchProductData(legacyId: number){
    console.log('FECTH PRODUCT DATA');

    const requestData = new FormData();

    const query = `
        SELECT DSPRODUTO,
            CDUNIDADE	
        FROM PRODUTOPDV
        WHERE CDPRODUTO = ${legacyId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

async function syncProductData(legacyProductId: number): Promise<Product>{
    console.log('SYNC PRODUCT DATA');

    const fetchedProduct: fetchedProduct[] = await fetchProductData(legacyProductId);

    return await createProduct({
        description: fetchedProduct[0].DSPRODUTO,
        legacyId: legacyProductId,
        unit: fetchedProduct[0].CDUNIDADE,
    });
}

async function fetchSalesData(initialDate: string, finalDate: string){
    console.log('FECTH SALES DATA');

    const requestData = new FormData();

    const query = `
        SELECT SQCAIXA,
            SQVENDA,
            DTVENDA,
            HRVENDA,
            VLRECEBIDO,
            CDPESSOA
        FROM VENDA
        WHERE STVENDA = 0
            AND DTVENDA BETWEEN '${initialDate}' AND '${finalDate}'; 
    `;
    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function syncSalesData(initialDate: string, finalDate: string): Promise<[number, number]>{
    console.log('SYNC SALES DATA');
    
    const fetchedSales: fetchedSale[] = await fetchSalesData(initialDate as string, finalDate as string);
    
    let totalCreatedData = 0;
    let totalUpdatedData = 0;

    for(const fetchedSale of fetchedSales){
        const [sale, saleIsCreated] = await findOrCreateSale({
            date: fetchedSale.DTVENDA,
            legacyId: parseLocaleNumber(fetchedSale.SQVENDA),
            legacyCashierId: parseLocaleNumber(fetchedSale.SQCAIXA),
            legacyOperatorId: parseLocaleNumber(fetchedSale.CDPESSOA),
            time: fetchedSale.HRVENDA,
            value: parseLocaleNumber(fetchedSale.VLRECEBIDO),
        });

        totalUpdatedData++;

        if(saleIsCreated){
            totalCreatedData++;

            const createdSaleItems = await syncSaleItemsData(sale);

            totalCreatedData += createdSaleItems;

            totalUpdatedData += createdSaleItems;
        }
        
    }

    return [totalCreatedData, totalUpdatedData];
}

async function fetchSaleItemsData(legacySaleId: number, legacyCashierId: number, legacyOperatorId: number){
    console.log('FECTH SALE ITEMS DATA');

    const requestData = new FormData();

    const query = `
        SELECT CDPESSOA,
            CDPRODUTO,
            QTPRODUTO,
            VLITEM,
            VLRECEBIDO
        FROM ITEMVENDA 
        WHERE SQCAIXA = ${legacyCashierId}
            AND SQVENDA = ${legacySaleId}
            AND CDPESSOA = ${legacyOperatorId}; 
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

async function syncSaleItemsData(sale: Sale): Promise<number>{
    console.log('SYNC SALE ITEMS DATA');

    const fetchedSaleItems: fetchedSaleItem[] = await fetchSaleItemsData(sale.legacyId, sale.legacyCashierId, sale.legacyOperatorId);

    let totalDataCreated = 0;

    for(const fetchedSaleItem of fetchedSaleItems){
        const legacyProductId = Number(fetchedSaleItem.CDPRODUTO);
        
        let product = await getProductByLegacyId(legacyProductId);

        if(!product){
            product = await syncProductData(legacyProductId);
            totalDataCreated++;
        }
        

        await createSaleItem({
            itemUnitValue: parseLocaleNumber(fetchedSaleItem.VLITEM),
            itemValue: parseLocaleNumber(fetchedSaleItem.VLRECEBIDO),
            legacyProductId: parseLocaleNumber(fetchedSaleItem.CDPRODUTO),
            product: { connect: { id: product.id } },
            quantity: parseLocaleNumber(fetchedSaleItem.QTPRODUTO),
            sale: { connect: { id: sale.id } }
        });

        totalDataCreated++;
    }


    return totalDataCreated;
}