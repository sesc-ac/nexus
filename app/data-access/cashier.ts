import { Prisma, Cashier } from "@prisma/client";
import prisma from "../db";

export async function createCashier(cashier: Prisma.CashierCreateInput): Promise<Cashier>{
    return await prisma.cashier.create({ data: cashier });
}

export async function getCashierByLegacyId(legacyCashierId: number, legacyOperatorId: number){
    return await prisma.cashier.findFirst({
        where: {
            legacyId: legacyCashierId,
            legacyOperatorId: legacyOperatorId
        }
    });
}

// export async function getCashiersByDateRange(initialDate: Date, finalDate: Date){
//     return await prisma.cashier.findMany({
//         where: {
//             openDate: {
//                 gte: initialDate,
//                 lte: finalDate
//             },
//         },
//     });
// }

// export async function getCashiersTotals(initialDate: Date, finalDate: Date){
//     return await prisma.cashier.aggregate({
//         _count: {
//             id: true
//         },

//         _sum: {
//             totalSalesValue: true,
//             totalSalesQuantity: true,
//         },

//         where: {
//             openDate: {
//                 gte: initialDate,
//                 lte: finalDate
//             },
//         },
//     });
// }

// export async function getCashier(id: number) {
//     return await prisma.cashier.findFirst({
//         where: {
//             id: id
//         }
//     });
// }