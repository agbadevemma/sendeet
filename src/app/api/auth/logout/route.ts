// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // Create the response for a successful logout
        const response = NextResponse.json(
            { message: "Logout successful" },
            { status: 200 }
        );

        // Clear the 'token' cookie by setting it with an expired date
        response.cookies.set("token", "", {
            httpOnly: true, // Ensures the cookie can't be accessed via JavaScript
            path: "/",      // Path where the cookie is available
            expires: new Date(0), // Expiring the cookie immediately
            sameSite: "lax", // Prevent CSRF issues
        });

        // You can also clear any other cookies if needed
        // response.cookies.set("adminToken", "", { expires: new Date(0) });

        return response;
    } catch (error) {


        // Handle unexpected errors
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
