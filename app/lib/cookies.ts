import { cookies } from "next/headers";

export async function deleteCookie(key: string): Promise<void>{
    console.log('COOKIES - DELETE COOKIE', key);
    
    const cookie = await cookies();
    cookie.delete(key);
}

export async function getCookie(key: string){
    console.log('COOKIES - GET COOKIE', key);
    
    const cookie = await cookies();

    return cookie.get(key)?.value;
}

export async function setCookie(key: string, value: string): Promise<void>{
    console.log('COOKIES - SET COOKIE', key, value);

    const cookie = await cookies();

    cookie.set(key, value, {
        httpOnly: true,
        path: '/',
        sameSite: "lax",
        // secure: true,
    });
}