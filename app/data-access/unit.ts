import { Prisma, Unit } from "@prisma/client";
import prisma from "../db";

export async function createUnit(unit: Prisma.UnitCreateInput): Promise<Unit>{
    console.log('CREATE UNIT DAL', unit)
    return await prisma.unit.create({ data: unit });
}

export async function getUnitByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<Unit | null>{
    console.log('GET UNIT BY LEGACY ID DAL', legacyId, legacyOriginDatabase)
    return await prisma.unit.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}