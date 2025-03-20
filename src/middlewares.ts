// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//     const { pathname, searchParams } = req.nextUrl;

//     // Retrieve tokens from cookies
//     const adminToken = req.cookies.get("adminToken")?.value;
//     const userToken = req.cookies.get("token")?.value;
//     const userTokens = req.cookies.get("userToken")?.value;
//     // console.log("user", userTokens);
    

//     // Redirect authenticated users from /login or /signup to /dashboard
//     if ((pathname === "/login" || pathname === "/signup") && userToken) {
//         return NextResponse.redirect(new URL("/dashboard", req.url));
//     }

//     // Protect admin dashboard routes
//     if (pathname === "/admin/login" && adminToken) {
//         const adminLoginUrl = new URL("/admin/dashboard", req.url);
//         return NextResponse.redirect(adminLoginUrl);
//     }

//     // Protect general user dashboard routes
//     if (pathname.startsWith("/dashboard") && !userToken) {
//         const userLoginUrl = new URL("/login", req.url);
//         return NextResponse.redirect(userLoginUrl);
//     }

//     // Allow request to proceed if no conditions are met
//     return NextResponse.next();
// }

// // Middleware matcher configuration
// export const config = {
//     matcher: [
//         "/admin/dashboard/:path*", 
//         "/admin/login",
//         "/dashboard/:path*",       // User dashboard routes
//         "/login",                  // Redirect if authenticated
//         "/signup",                 // Redirect if authenticated
//     ],
// };
