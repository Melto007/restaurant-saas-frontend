import {NextResponse} from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value
    const { pathname } = request.nextUrl

    const isDashBoardPage = pathname.startsWith("/dashboard")
    const isLogin = pathname === "/"

    if(isDashBoardPage && !token){
        return NextResponse.redirect(new URL('/', request.url))
    }

    if(isLogin && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/dashboard/:path*']
}