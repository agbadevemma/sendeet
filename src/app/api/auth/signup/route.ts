// app/api/auth/signup/route.ts
import axios from 'axios';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  try {

    const { email, password, role } = await req.json();

    console.log( email, password, role);
    
    if (!email || !password || !role) {
      return NextResponse.json(
        { message: 'Email, password, and role are required' },
        { status: 400 }
      );
    }

    // Send request to the external API using Axios
    const { data } = await axios.post(
      `${BASE_URL}/api/v1/auth/register`,
      { email, password, role },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(
      { message: 'Signup successful', user: data.user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Signup error:', error.response?.data || error.message);

    // Handle errors from Axios and external API
    if (error.response) {
      const errorData = error.response.data;
      return NextResponse.json(
        { message: errorData.message || 'Signup failed' },
        { status: error.response.status }
      );
    }

    // Handle unexpected errors
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
