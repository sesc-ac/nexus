import { Prisma, CashierOperator } from "@prisma/client";
import prisma from "../db";

export async function createCashierOperator(cashierOperator: Prisma.CashierOperatorCreateInput): Promise<CashierOperator>{
    console.log('💿 DAL - CREATE CASHIER OPERATOR', cashierOperator);

    return await prisma.cashierOperator.create({ data: cashierOperator });
}

export async function getCashierOperator(id: string): Promise<CashierOperator | null>{
    console.log('💿 DAL - GET CASHIER OPERATOR', id);

    return await prisma.cashierOperator.findUnique({
        where: {
            id: id
        }
    });
}

export async function getCashierOperatorByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<CashierOperator | null>{
    console.log('💿 DAL - GET CASHIER OPERATOR BY LEGACY ID', legacyId);

    return await prisma.cashierOperator.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}