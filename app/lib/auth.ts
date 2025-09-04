'use server'

import { getSession } from "../data-access/session";
import { getCookie } from "./cookies";

export async function verifySession(){
    console.log('AUTH - VERIFY SESSION');

    const sessionId = await getCookie('sessionId');

    if(!sessionId) return null;

    const session = await getSession(sessionId);

    return session && !session.endedAt ? session : null;
}