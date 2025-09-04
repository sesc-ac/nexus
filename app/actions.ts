'use server'

import { redirect } from "next/navigation";
import { endSession } from "./data-access/session";
import { verifySession } from "./lib/auth";

export default async function logoutAction(){
    console.log('🔁 ACTION - LOGOUT');

    const session = await verifySession();

    if(session) 
        await endSession(session?.id);
        
    redirect('/login/');
}