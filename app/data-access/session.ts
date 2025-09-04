import { Prisma, Session } from "@prisma/client";
import prisma from "../db";
import { deleteCookie, setCookie } from "../lib/cookies";

export async function createSession(session: Prisma.SessionCreateInput): Promise<Session>{
    console.log('💿 DAL - CREATE SESSION', session);
    
    const newSession = await prisma.session.create({ data: session });

    await setCookie('sessionId', newSession.id);

    return newSession;
}

export async function endSession(id: string){
    console.log('💿 DAL - END SESSION', id);

    await deleteCookie('sessionId');

    return await prisma.session.update({
        data: { endedAt: new Date()},
        where: { id: id }
    });
}

export async function getSession(id: string){
    console.log('💿 DAL - GET SESSION', id);

    return await prisma.session.findUnique({ 
        include: { user: true },
        where: { id: id } 
    });
}