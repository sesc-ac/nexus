export async function fetchCashiers() {
    const headers = new Headers();
    headers.append('VENDAS-KEY', process.env.VENDAS_KEY || '');

    const requestData = new FormData();
    requestData.append('initialDate', '2025-03-13');
    requestData.append('finalDate', '2025-03-13');

    try{
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch('http://consulta.sescacre.com.br/vendas/caixas/', {
            body: requestData,
            headers: headers,
            method: 'POST'
        });

        const data = await response.json();

        return data;
    }catch(error){
        console.error('Data Fetch Error, fetchCashiers', error);
    }
}