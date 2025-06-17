import { Prisma, SalePlace } from "@prisma/client";
import prisma from "../db";

export async function createSalePlace(salePlace: Prisma.SalePlaceCreateInput): Promise<SalePlace>{
    console.log('DAL CREATE SALE PLACE', salePlace);

    return await prisma.salePlace.create({ data: salePlace });
}

export async function getSalePlaceByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<SalePlace | null>{
    console.log('DAL GET SALE PLACE BY LEGACY ID', legacyId, legacyOriginDatabase);

    return await prisma.salePlace.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}