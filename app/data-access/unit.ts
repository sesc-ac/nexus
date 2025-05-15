import { Prisma, Unit } from "@prisma/client";
import prisma from "../db";

export async function createUnit(unit: Prisma.UnitCreateInput): Promise<Unit>{
    return await prisma.unit.create({ data: unit });
}

export async function getUnitByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<Unit | null>{
    return await prisma.unit.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}