import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest){
    console.log('🔒 MIDDLEWARE', request.nextUrl.pathname);
    
    // const sessionId = request.cookies.get('sessionId')?.value;
    
    // if (!sessionId) 
    //   return NextResponse.redirect(new URL("/login", request.url));

    // return NextResponse.next();
}

export const config = {
  matcher: [
    '/',  
    '/central/:path*', 
    '/gecon/:path*', 
    '/getic/:path*',  
  ]
}