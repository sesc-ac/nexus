import { Prisma, SalePlace } from "@prisma/client";
import prisma from "../db";

export async function createSalePlace(salePlace: Prisma.SalePlaceCreateInput): Promise<SalePlace>{
    return await prisma.salePlace.create({ data: salePlace });
}

export async function getSalePlaceByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<SalePlace | null>{
    return await prisma.salePlace.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}