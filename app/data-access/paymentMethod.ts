import { PaymentMethod, Prisma } from "@prisma/client";
import prisma from "../db";

export async function createPaymentMethod(paymentMethod: Prisma.PaymentMethodCreateInput): Promise<PaymentMethod>{
    console.log('DAL CREATE PAYMENT METHOD', paymentMethod);

    return await prisma.paymentMethod.create({ data: paymentMethod });
}

export async function getPaymentMethodtByLegacyId(legacyId: number, legacyOriginDatabase: string): Promise<PaymentMethod | null>{
    console.log('DAL GET PAYMENT METHOD BY LEGACY ID', legacyId, legacyOriginDatabase);

    return await prisma.paymentMethod.findFirst({
        where: {
            legacyId: legacyId,
            legacyOriginDatabase: legacyOriginDatabase
        }
    });
}