'use server'

export async function fetchCashiersData(initialDate: string, finalDate: string){
    const headers = new Headers();
    headers.append('DATA-SYNC-KEY', process.env.DATA_SYNC_KEY || '');
    
    const requestData = new FormData();
    requestData.append('initialDate', initialDate);
    requestData.append('finalDate', finalDate);

    const response = await fetch('http://consulta.sescacre.com.br/sincronizacao/caixas.php', {
        body: requestData,
        headers: headers,
        method: 'POST'
    });
    
    if(!response.ok)
        throw new Error('Erro na sincronização dos dados de Vendas.');

    const data = await response.json()

    return data;
}