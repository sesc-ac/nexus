import prisma from "../db";

export async function getCashiersByDateRange(initialDate: Date, finalDate: Date){
    return await prisma.cashier.findMany({
        where: {
            openDate: {
                gte: initialDate,
                lte: finalDate
            },
        },
    });
}

export async function getCashiersTotals(initialDate: Date, finalDate: Date){
    return await prisma.cashier.aggregate({
        _count: {
            id: true
        },

        _sum: {
            totalSalesValue: true,
            totalSalesQuantity: true,
        },

        where: {
            openDate: {
                gte: initialDate,
                lte: finalDate
            },
        },
    });
}

export async function getCashier(id: number) {
    return await prisma.cashier.findFirst({
        where: {
            id: id
        }
    });
}