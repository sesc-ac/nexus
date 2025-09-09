import { getSale, SaleWithRelations } from "@/app/data-access/sale";
import { saleJSON } from "./saleJSON";

export async function emitSale(saleId: string) {
    console.log('EMIT SALE', saleId);
    
    const sale = await getSale(saleId);
    
    const nfeSescId = process.env.NFE_SESC_ID as string;
    const nfeUrl = `https://api.nfse.io/v2/companies/${nfeSescId}/consumerinvoices?environment=Test`;

    const headers = new Headers();
    headers.append('Authorization', process.env.NFE_SESC_KEY as string);
    headers.append('Content-Type', 'application/json');

    const json = saleJSON(sale as SaleWithRelations);

    const response = await fetch(nfeUrl, {
        body: json,
        headers: headers,
        method: 'POST'
    });
    
    const data = await response.json();

    return data;
}