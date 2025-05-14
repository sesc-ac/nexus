import { PaymentMethod, Prisma } from "@prisma/client";
import prisma from "../db";

export async function createPaymentMethod(paymentMethod: Prisma.PaymentMethodCreateInput): Promise<PaymentMethod>{
    return await prisma.paymentMethod.create({ data: paymentMethod });
}

export async function getPaymentMethodtByLegacyId(legacyId: number){
    console.log('Get Payment Method By Legacy Id', legacyId);

    return await prisma.paymentMethod.findUnique({
        where: {
            legacyId: legacyId,
        }
    });
}