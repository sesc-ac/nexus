import { Prisma, Product, Sale, SaleItem } from "@prisma/client";
import prisma from "../db";

export async function findOrCreateSale(sale: Prisma.SaleCreateInput): Promise<[Sale, boolean]>{
    const existingSale = await prisma.sale.findFirst({
        where: {
            legacyId: sale.legacyId,
            legacyCashierId: sale.legacyCashierId,
            legacyOperatorId: sale.legacyOperatorId,
        }
    });

    if(!existingSale){
        const createdSale = await prisma.sale.create({ data: sale });
        return [createdSale, true];
    }

    return [existingSale, false];
}

export async function getSales(){
    return await prisma.sale.findMany({});
}