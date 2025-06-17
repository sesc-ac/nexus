import { Prisma, Sale } from "@prisma/client";
import prisma from "../db";

export async function findOrCreateSale(sale: Prisma.SaleCreateInput): Promise<[Sale, boolean]>{
    console.log('DAL FIND OR CREATE SALE', sale);

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

export async function getSale(id: string): Promise<SaleWithRelations | null>{
    console.log('DAL GET SALE', id);

    return await prisma.sale.findUnique({
        where: {
            id: id
        },

        include: saleWithIncludes.include
    });
}

export async function getSalesByDateRange(initialDate: Date, finalDate: Date): Promise<SaleWithRelations[]> {
    console.log('DAL GET SALES BY RANGE DATE', initialDate, finalDate);
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
    console.log('DAL GET SALES TOTALS');
    
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