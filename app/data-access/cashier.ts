import { Prisma, Cashier } from "@prisma/client";
import prisma from "../db";

export async function createCashier(cashier: Prisma.CashierCreateInput): Promise<Cashier>{
    console.log('CREATE CASHIER DAL', cashier);

    return await prisma.cashier.create({ data: cashier });
}

export async function getCashierByLegacyId(legacyCashierId: number, legacyOperatorId: number){
    console.log('GET CASHIER BY LEGACY ID DAL', legacyCashierId);

    return await prisma.cashier.findFirst({
        where: {
            legacyId: legacyCashierId,
            legacyOperatorId: legacyOperatorId
        }
    });
}