import prisma from "../db";

export async function getSales(){
    return await prisma.sale.findMany({
        skip: 0,
        take: 10,
    });
}

export async function getSalesByCashier(cashierId: number){
    return await prisma.sale.findMany({
        where: {
            cashierId: cashierId
        }
    });
}

export async function getSale(id: number){
    return await prisma.sale.findFirst({
        where: {
            id: id
        }
    });
}   

export async function getSaleItems(saleId: number){
    return await prisma.saleItem.findMany({
        where: {
            saleId: saleId
        }
    });
}