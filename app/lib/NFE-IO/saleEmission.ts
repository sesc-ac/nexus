import { getSale, SaleWithRelations } from "@/app/data-access/sale";
import { saleJSON } from "./saleJSON";

export async function emitSale(saleId: string) {
    console.log('EMIT SALE', saleId);
    
    const sale = await getSale(saleId);

    const json = saleJSON(sale as SaleWithRelations);

    console.log(json);
}