export async function syncLegacySalesData(initialDate: any, finalDate: any){
    const headers = new Headers();
    headers.append('CUPONS-KEY', process.env.CUPONS_KEY || '');
    
    const requestData = new FormData();
    requestData.append('initialDate', initialDate);

    if(finalDate) 
        requestData.append('finalDate', finalDate);
    else
        requestData.append('finalDate', initialDate);

    const response = await fetch('http://localhost:8000/data_sync/cashiers/', {
        body: requestData,
        headers: headers,
        method: 'POST'
    });

    if(!response.ok)
        throw new Error('Erro na sincrinização dos dados de Vendas.');

    const data = await response.json()

    return data;
}