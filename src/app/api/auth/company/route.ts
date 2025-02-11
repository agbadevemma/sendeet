import axios from 'axios';
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function PUT(req: Request) {
    try {
        const { businessRegistrationNumber, industry, noOfEmployees, noOfSubscribers } = await req.json();

        // Validate required fields
        if (!businessRegistrationNumber || !industry || !noOfEmployees || !noOfSubscribers) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const response = await axios.put(`${BASE_URL}/api/v1/business`, {
            businessRegistrationNumber,
            industry,
            noOfEmployees,
            noOfSubscribers,
        });

        console.log("Response Data:", response.data);

        return NextResponse.json(response.data, { status: response.status });
    } catch (error: any) {
        console.error("Error in updating:", error.message);
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || 'Internal Server Error';
        return NextResponse.json({ error: message }, { status });
    }
}
