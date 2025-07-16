import { Prisma, Sale, SaleItem } from "@prisma/client";
import prisma from "../db";

export async function createSaleItem(saleItem: Prisma.SaleItemCreateInput): Promise<SaleItem>{
    console.log('💿 DAL - CREATE SALE ITEM', saleItem);

    return await prisma.saleItem.create({ data: saleItem });
}

export async function getSaleItems(sale: Sale): Promise<SaleItem[]>{
    console.log('💿 DAL - GET SALE ITEMS', sale);

    return await prisma.saleItem.findMany({
        where: {
            sale: sale
        },
    });
}