// app/api/auth/login/route.ts
import axios from "axios";
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Send login request to the external API using Axios
    const { data } = await axios.post(
      `${BASE_URL}/api/v1/auth/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    // Create the response with the token and user information
    const response = NextResponse.json(
      { message: "Login successful", data },
      { status: 200 }
    );
    console.log("response", response);

    // Set the token cookie securely
    response.cookies.set("token", data.data.token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax", // Prevents CSRF issues
    });


    return response;
  } catch (error: any) {
    // Log the error for debugging (in production, consider using a proper logging service)
    console.error("Login error:", error.response?.data || error.message);

    // Handle errors from Axios and the external API
    if (error.response) {
      const { message = "Login failed" } = error.response.data;
      return NextResponse.json(
        { message },
        { status: error.response.status }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
