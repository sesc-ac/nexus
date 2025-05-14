import { Prisma, Customer } from "@prisma/client";
import prisma from "../db";

export async function createCustomer(customer: Prisma.CustomerCreateInput): Promise<Customer>{
    return await prisma.customer.create({ data: customer });
}

export async function getCustomerByLegacyId(legacyId: number, legacyUnitId: number){
    return await prisma.customer.findFirst({
        where: {
            legacyId: legacyId,
            legacyUnitId,
        }
    });
}