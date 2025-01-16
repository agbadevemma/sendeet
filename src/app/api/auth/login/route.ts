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
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Login successful", data);

    return NextResponse.json(
      { message: "Login successful", token: data.token, user: data.user },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Login error message", error.response?.data || error.message);

    // Handle errors from Axios and external API
    if (error.response) {
      const errorData = error.response.data;
      return NextResponse.json(
        { message: errorData.message || "Login failed" },
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
