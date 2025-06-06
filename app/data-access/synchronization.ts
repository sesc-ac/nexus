import { Prisma, Synchronization } from "@prisma/client";
import prisma from "../db";

export async function createSynchronization(synchronization: Prisma.SynchronizationCreateInput): Promise<Synchronization>{
    return await prisma.synchronization.create({ data: synchronization });
}

export async function getSynchronizations(): Promise<Synchronization[]>{
    return await prisma.synchronization.findMany({ orderBy: { createdAt: 'desc' } });
}