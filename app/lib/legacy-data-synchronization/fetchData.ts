'use server'

const dataSyncURL = process.env.DATA_SYNC_URL as string;

const headers = new Headers();
headers.append('DATA-SYNC-KEY', process.env.DATA_SYNC_KEY as string);


async function fetchLegacyData(requestData: FormData){
    const response = await fetch(dataSyncURL, {
        body: requestData,
        headers: headers,
        method: 'POST'
    });
    
    if(!response.ok)
        throw new Error('Erro na consulta dos dados legados.');

    const data = await response.json();

    return data;
}

export async function fetchCashierData(legacyCashierId: number, legacyOperatorId: number){
    console.log('FETCH CASHIER DATA');

    const requestData = new FormData();

    const query = `
        SELECT DTABERTURA,
            CDLOCVENDA,
            HRABERTURA,
            HRFECHAMEN,
            CDPESSOA	
        FROM CACAIXA
        WHERE SQCAIXA = ${legacyCashierId}
            AND CDPESSOA = ${legacyOperatorId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchCashierOperatorData(legacyId: number){
    console.log('FETCH CASHIER OPERATOR DATA');

    const requestData = new FormData();

    const query = `
        SELECT NMPESSOA
        FROM PESSOA
        WHERE CDPESSOA = ${legacyId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchCustomerData(legacyId: number, legacyUnitId: number){
    console.log('FETCH CUSTOMER DATA');

    const requestData = new FormData();

    const query = `
        SELECT NMCLIENTE,
            CDCATEGORI
        FROM CLIENTELA
        WHERE SQMATRIC = ${legacyId}
            AND CDUOP = ${legacyUnitId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchCustomerCategoryData(legacyId: number){
    console.log('FETCH CUSTOMER CATEGORY DATA');

    const requestData = new FormData();

    const query = `
        SELECT DSCATEGORI	
        FROM CATEGORIA
        WHERE CDCATEGORI = ${legacyId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchPaymentMethod(legacyId: number){
    console.log('FETCH PAYMENT METHOD DATA');

    const requestData = new FormData();

    const query = `
        SELECT DSMOEDAPGT
        FROM MOEDAPGTO
        WHERE CDMOEDAPGT = ${legacyId}; 
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchProductData(legacyId: number){
    console.log('FETCH PRODUCT DATA');

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

export async function fetchSalesData(initialDate: string, finalDate: string){
    console.log('FETCH SALES DATA');

    const requestData = new FormData();

    const query = `
        SELECT SQCAIXA,
            SQVENDA,
            DTVENDA,
            HRVENDA,
            VLRECEBIDO,
            CDPESSOA,
            SQMATRIC,
            CDUOP
        FROM VENDA
        WHERE STVENDA = 0
            AND DTVENDA BETWEEN '${initialDate}' AND '${finalDate}'; 
    `;
    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchSaleItemsData(legacySaleId: number, legacyCashierId: number, legacyOperatorId: number){
    console.log('FETCH SALE ITEMS DATA');

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

export async function fetchSalePlaceData(legacyId: number){
    console.log('FETCH SALE PLACE DATA');

    const requestData = new FormData();

    const query = `
        SELECT CDUOP,
            DSLOCVENDA	
        FROM LOCALVENDA
        WHERE CDLOCVENDA = ${legacyId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchSalePaymentMethods(legacySaleId: number, legacyCashierId: number, legacyOperatorId: number){
    console.log('FETCH SALE PAYMENT METHODS DATA');

    const requestData = new FormData();

    const query = `
        SELECT CDMOEDAPGT
        FROM VENDMOEDA
        WHERE SQVENDA = ${legacySaleId}
            AND SQCAIXA = ${legacyCashierId}
            AND CDPESSOA = ${legacyOperatorId}; 
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);
}

export async function fetchUnitData(legacyId: number){
    console.log('FETCH UNIT DATA');

    const requestData = new FormData();

    const query = `
        SELECT NMUOP
        FROM UOP
        WHERE CDUOP = ${legacyId};
    `;

    requestData.append('query', query);

    return await fetchLegacyData(requestData);

}