// redux/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: { id: string; email: string };
  token: string;
}

interface SignupRequest {
  email: string;
  password: string;
  role: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }), // Adjust the base URL to match your API
  endpoints: (builder) => ({
    signup: builder.mutation<LoginResponse, SignupRequest>({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (otp: string) => ({
        url: "/verifyOTP", // Matches the Next.js API route
        method: "POST",
        body: { otp },
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation,useVerifyOtpMutation } = authApi;
