const headers = new Headers();
// headers.append('Content-Type', 'multipart/form-data;');
headers.append('VENDAS-KEY', process.env.VENDAS_KEY || '');

export async function fetchSales(){
    const salesData = new FormData();
    salesData.append('initialDate', '2025-02-01');
    salesData.append('finalDate', '2025-02-01');

    // const body = {
    //     'initialDate': '2025-02-01',
    //     'finalDate': '2025-02-01',
    // };

    // console.log('Headers', headers)
    // console.log('Body', salesData)
    try{
        const response = await fetch('http://consulta.sescacre.com.br/vendas/', {
            // body: JSON.stringify(body),
            body: salesData,
            headers: headers,
            method: 'POST'
        });
        const data = await response.json();

        return data;
    }catch(error){
        console.error('Data Fetch Error', error);
    }
}