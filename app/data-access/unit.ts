import { Prisma, Unit } from "@prisma/client";
import prisma from "../db";

export async function createUnit(unit: Prisma.UnitCreateInput): Promise<Unit>{
    console.log('DAL CREATE UNIT', unit)
    return await prisma.unit.create({ data: unit });
}

export async function getUnitByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<Unit | null>{
    console.log('DAL GET UNIT BY LEGACY ID', legacyId, legacyOriginDatabase)
    return await prisma.unit.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}