import { Prisma, SaleItem } from "@prisma/client";
import prisma from "../db";

export async function createSaleItem(saleItem: Prisma.SaleItemCreateInput): Promise<SaleItem>{
    return await prisma.saleItem.create({ data: saleItem });
}