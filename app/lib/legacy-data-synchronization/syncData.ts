'use server'

import { Product, Sale, SalePlace, Unit, CashierOperator, Customer, CustomerCategory, PaymentMethod } from "@prisma/client";
import { createProduct, getProductByLegacyId } from "../../data-access/product";
import { findOrCreateSale } from "../../data-access/sale";
import { createSaleItem } from "../../data-access/saleItem";
import { parseLocaleNumber } from "../../_utils/dataFormat";
import { fetchedCashier, fetchedCashierOperator, fetchedCustomer, fetchedCustomerCategory, fetchedPaymentMethod, fetchedProduct, fetchedSale, fetchedSaleItem, fetchedSalePaymentMethod, fetchedSalePlace, fetchedUnit } from "./types";
import { createUnit, getUnitByLegacyId } from "../../data-access/unit";
import { createCashier, getCashierByLegacyId } from "../../data-access/cashier";
import { createSalePlace, getSalePlaceByLegacyId } from "../../data-access/salePlace";
import { createCashierOperator, getCashierOperatorByLegacyId } from "../../data-access/cashierOperator";
import { createCustomer, getCustomerByLegacyId } from "../../data-access/customer";
import { fetchCashierData, fetchCashierOperatorData, fetchCustomerCategoryData, fetchCustomerData, fetchPaymentMethod, fetchProductData, fetchSaleItemsData, fetchSalePaymentMethods, fetchSalePlaceData, fetchSalesData, fetchUnitData } from "./fetchData";
import { createCustomerCategory, getCustomerCategoryByLegacyId } from "@/app/data-access/customerCategory";
import { createPaymentMethod, getPaymentMethodtByLegacyId } from "@/app/data-access/paymentMethod";

async function syncCashierData(legacyCashierId: number, legacyOperatorId: number, originDatabase: string){
    console.log('SYNC CASHIER DATA', originDatabase);

    const fetchedCashier: fetchedCashier[] = await fetchCashierData(legacyCashierId, legacyOperatorId, originDatabase);
    
    const legacySalePlaceId = parseLocaleNumber(fetchedCashier[0].CDLOCVENDA);

    let salePlace = await getSalePlaceByLegacyId(legacySalePlaceId, originDatabase);

    if(!salePlace){
        salePlace = await syncSalePlaceData(legacySalePlaceId, originDatabase);
    }

    const legacyCashierOperatorId = parseLocaleNumber(fetchedCashier[0].CDPESSOA);

    let operator = await getCashierOperatorByLegacyId(legacyCashierOperatorId, originDatabase);

    if(!operator){
        operator = await syncCashierOperatorData(legacyCashierOperatorId, originDatabase);
    }

    return await createCashier({
        closeTime: fetchedCashier[0].HRFECHAMEN,
        legacyId: legacyCashierId,
        legacyOperatorId: legacyOperatorId,
        legacyOriginDatabase: originDatabase,
        legacySalePlaceId: legacySalePlaceId,
        openDate: new Date(fetchedCashier[0].DTABERTURA),
        openTime: fetchedCashier[0].HRABERTURA,
        operator: { connect: { id: operator.id } },
        salePlace: { connect: { id: salePlace.id } }
    });
}

async function syncCashierOperatorData(legacyId: number, originDatabase: string): Promise<CashierOperator>{
    console.log('SYNC CASHIER OPERATOR DATA', originDatabase);

    const fetchedCashierOperator: fetchedCashierOperator[] = await fetchCashierOperatorData(legacyId, originDatabase);
    
    return await createCashierOperator({
        legacyId: legacyId,
        legacyOriginDatabase: originDatabase,
        name: fetchedCashierOperator[0].NMPESSOA,
    });
}

async function syncCustomerData(legacyId: number, legacyUnitId: number, originDatabase: string): Promise<Customer | null>{
     console.log('SYNC CUSTOMER DATA', originDatabase);

    const fetchedCustomer: fetchedCustomer[] = await fetchCustomerData(legacyId, legacyUnitId, originDatabase);

    if(fetchedCustomer.length){
        const legacyCustomerCategoryId = parseLocaleNumber(fetchedCustomer[0].CDCATEGORI);

        let category = await getCustomerCategoryByLegacyId(legacyCustomerCategoryId, originDatabase);

        if(!category)
            category = await syncCustomerCategoryData(legacyCustomerCategoryId, originDatabase);
            
        return await createCustomer({
            category: { connect: { id: category.id } },
            legacyId: legacyId,
            legacyOriginDatabase: originDatabase,
            legacyUnitId: legacyUnitId,
            name: fetchedCustomer[0].NMCLIENTE,
        }) 
    }

    return null
}

async function syncCustomerCategoryData(legacyId: number, originDatabase: string): Promise<CustomerCategory>{
    console.log('SYNC CUSTOMER CATEGORY DATA', originDatabase);

    const fetchedCustomerCategory: fetchedCustomerCategory[] = await fetchCustomerCategoryData(legacyId, originDatabase);

    return await createCustomerCategory({
        legacyId: legacyId,
        legacyOriginDatabase: originDatabase,
        name: fetchedCustomerCategory[0].DSCATEGORI,
    });
}

async function syncPaymentMethodsData(legacySaleId: number, legacyCashierId: number, legacyOperatorId: number, originDatabase: string): Promise<PaymentMethod | undefined>{
    console.log('SYNC PAYMENT METHODS DATA', originDatabase);

    const fetchedSalePaymentMethods: fetchedSalePaymentMethod[] = await fetchSalePaymentMethods(legacySaleId, legacyCashierId, legacyOperatorId, originDatabase);

    if(fetchedSalePaymentMethods.length){
        const legacyPaymentMethodId = parseLocaleNumber(fetchedSalePaymentMethods[0].CDMOEDAPGT); 

        let paymentMethod = await getPaymentMethodtByLegacyId(legacyPaymentMethodId, originDatabase);

        if(!paymentMethod){
            const fetchedPaymentMethod: fetchedPaymentMethod[] = await fetchPaymentMethod(legacyPaymentMethodId, originDatabase);

            return await createPaymentMethod({
                legacyId: legacyPaymentMethodId,
                legacyOriginDatabase: originDatabase,
                name: fetchedPaymentMethod[0].DSMOEDAPGT
            });
        }

        return paymentMethod;
    }

    return undefined;
}

async function syncProductData(legacyId: number, originDatabase: string): Promise<Product>{
    console.log('SYNC PRODUCT DATA', originDatabase);

    const fetchedProduct: fetchedProduct[] = await fetchProductData(legacyId, originDatabase);

    return await createProduct({
        description: fetchedProduct[0].DSPRODUTO,
        legacyId: legacyId,
        legacyOriginDatabase: originDatabase,
        unit: fetchedProduct[0].CDUNIDADE,
    });
}

export async function syncSalesData(initialDate: string, finalDate: string, originDatabase: string): Promise<[number, number]>{
    console.log('SYNC SALES DATA', originDatabase);
    
    const fetchedSales: fetchedSale[] = await fetchSalesData(initialDate as string, finalDate as string, originDatabase);
    
    let totalCreatedData = 0;
    let totalUpdatedData = 0;

    for(const fetchedSale of fetchedSales){
        const legacyId = parseLocaleNumber(fetchedSale.SQVENDA);
        const legacyCashierId = parseLocaleNumber(fetchedSale.SQCAIXA);
        const legacyOperatorId = parseLocaleNumber(fetchedSale.CDPESSOA);

        let cashier = await getCashierByLegacyId(legacyCashierId, legacyOperatorId);

        if(!cashier){
            cashier = await syncCashierData(legacyCashierId, legacyOperatorId, originDatabase);
            totalCreatedData++;
            totalUpdatedData++;
        }

        const legacyCustomerId = parseLocaleNumber(fetchedSale.SQMATRIC);
        const legacyUnitId = parseLocaleNumber(fetchedSale.CDUOP);

        let customer = await getCustomerByLegacyId(legacyCustomerId, legacyUnitId);

        if(!customer){
            customer = await syncCustomerData(legacyCustomerId, legacyUnitId, originDatabase);
            totalCreatedData++;
            totalUpdatedData++;
        }

        const paymentMethod = await syncPaymentMethodsData(legacyId, legacyCashierId, legacyOperatorId, originDatabase);

        const [sale, saleIsCreated] = await findOrCreateSale({
            cashier: { connect: { id: cashier.id } },
            customer: customer ? { connect: { id: customer.id } } : undefined,
            date: new Date(fetchedSale.DTVENDA),
            legacyId: legacyId,
            legacyCashierId: legacyCashierId,
            legacyOperatorId: legacyOperatorId,
            legacyOriginDatabase: originDatabase,
            paymentMethod: paymentMethod ? { connect: { id: paymentMethod.id } } : undefined,
            time: fetchedSale.HRVENDA,
            value: parseLocaleNumber(fetchedSale.VLRECEBIDO),
        });

        totalUpdatedData++;

        if(saleIsCreated){
            totalCreatedData++;

            const createdSaleItems = await syncSaleItemsData(sale, originDatabase);

            totalCreatedData += createdSaleItems;

            totalUpdatedData += createdSaleItems;
        }
        
    }

    return [totalCreatedData, totalUpdatedData];
}

async function syncSaleItemsData(sale: Sale, originDatabase: string): Promise<number>{
    console.log('SYNC SALE ITEMS DATA', originDatabase);

    const fetchedSaleItems: fetchedSaleItem[] = await fetchSaleItemsData(sale.legacyId, sale.legacyCashierId, sale.legacyOperatorId, originDatabase);

    let totalCreatedData = 0;

    for(const fetchedSaleItem of fetchedSaleItems){
        const legacyProductId = Number(fetchedSaleItem.CDPRODUTO);
        
        let product = await getProductByLegacyId(legacyProductId, originDatabase);

        if(!product){
            product = await syncProductData(legacyProductId, originDatabase);
            totalCreatedData++;
        }

        await createSaleItem({
            itemUnitValue: parseLocaleNumber(fetchedSaleItem.VLITEM),
            itemValue: parseLocaleNumber(fetchedSaleItem.VLRECEBIDO),
            product: { connect: { id: product.id } },
            quantity: parseLocaleNumber(fetchedSaleItem.QTPRODUTO),
            sale: { connect: { id: sale.id } }
        });

        totalCreatedData++;
    }


    return totalCreatedData;
}

async function syncSalePlaceData(legacyId: number, originDatabase: string): Promise<SalePlace>{
    console.log('SYNC SALE PLACE DATA', originDatabase);

    const fetchedSalePlace: fetchedSalePlace[] = await fetchSalePlaceData(legacyId, originDatabase);

    const legacyUnitId = parseLocaleNumber(fetchedSalePlace[0].CDUOP);

    let unit = await getUnitByLegacyId(legacyUnitId, originDatabase);

    if(!unit){
        unit = await syncUnitData(legacyUnitId, originDatabase);
    }

    return await createSalePlace({
        legacyId: legacyId,
        legacyOriginDatabase: originDatabase,
        name: fetchedSalePlace[0].DSLOCVENDA,
        unit: { connect: { id: unit.id } }
    });
}

async function syncUnitData(legacyId: number, originDatabase: string): Promise<Unit>{
     console.log('SYNC UNIT DATA', originDatabase);

    const fetchedUnit: fetchedUnit[] = await fetchUnitData(legacyId, originDatabase);

    return await createUnit({
        legacyId: legacyId,
        legacyOriginDatabase: originDatabase,
        name: fetchedUnit[0].NMUOP,
    });
}