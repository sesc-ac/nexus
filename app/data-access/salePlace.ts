import { Prisma, SalePlace } from "@prisma/client";
import prisma from "../db";

export async function createSalePlace(salePlace: Prisma.SalePlaceCreateInput): Promise<SalePlace>{
    return await prisma.salePlace.create({ data: salePlace });
}

export async function getSalePlaceByLegacyId(legacyId: number){
    return await prisma.salePlace.findUnique({
        where: {
            legacyId: legacyId
        }
    });
}