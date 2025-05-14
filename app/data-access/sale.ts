import { Prisma, Sale } from "@prisma/client";
import prisma from "../db";

export async function findOrCreateSale(sale: Prisma.SaleCreateInput): Promise<[Sale, boolean]>{
    const existingSale = await prisma.sale.findFirst({
        where: {
            legacyId: sale.legacyId,
            legacyCashierId: sale.legacyCashierId,
            legacyOperatorId: sale.legacyOperatorId,
        }
    });

    if(!existingSale){
        const createdSale = await prisma.sale.create({ data: sale });
        return [createdSale, true];
    }

    return [existingSale, false];
}

export async function getSale(saleId: string): Promise<SaleWithRelations | null>{
    return await prisma.sale.findUnique({
        where: {
            id: saleId
        },

        include: saleWithIncludes.include
    });
}

export async function getSalesByDateRange(initialDate: Date, finalDate: Date): Promise<SaleWithRelations[]> {
    return await prisma.sale.findMany({
        where: {
            date: {
                gte: initialDate,
                lte: finalDate
            }
        },

        include: saleWithIncludes.include,
        orderBy: { time: 'desc' }
    });
}

export async function getSalesTotals(initialDate: Date, finalDate: Date){
    return await prisma.sale.aggregate({
        _count: {
            id: true
        },

        _sum: {
            value: true
        },

        where: {
            date: {
                gte: initialDate,
                lte: finalDate
            }
        }
    });
}

const saleWithIncludes = Prisma.validator<Prisma.SaleDefaultArgs>()({
    include: {
        cashier: {
            include: {
                operator: true,
                salePlace: {
                    include: {
                        unit: true
                    }
                }
            }
        },

        customer: {
            include: {
                category: true
            } 
        },

        items: {
            include: {
                product: true
            }
        },

        paymentMethod: true
    }
});

export type SaleWithRelations = Prisma.SaleGetPayload<typeof saleWithIncludes>;