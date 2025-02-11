// app/api/verify-otp/route.ts
import axios from 'axios';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(req: Request) {
  try {
    const { email} = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'email is required' }, { status: 400 });
    }

    const response = await axios.post(`${BASE_URL}/api/v1/auth/resend-otp`, { email });


    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status });
  }
}
