import { Prisma, Sale, SaleItem } from "@prisma/client";
import prisma from "../db";

export async function createSaleItem(saleItem: Prisma.SaleItemCreateInput): Promise<SaleItem>{
    return await prisma.saleItem.create({ data: saleItem });
}

export async function getSaleItems(sale: Sale): Promise<SaleItem[]>{
    return await prisma.saleItem.findMany({
        where: {
            sale: sale
        },
    });
}