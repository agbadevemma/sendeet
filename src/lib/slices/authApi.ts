// redux/authApi.ts
import { withLoading } from "@/utils/withLoading";
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
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/auth",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }), // Adjust the base URL to match your API
  endpoints: (builder) => ({
    signup: builder.mutation<LoginResponse, SignupRequest>({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
      onQueryStarted: withLoading(),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: withLoading(),
    }),
    verifyOtp: builder.mutation({
      query: (otp: string) => ({
        url: "/verifyOTP", // Matches the Next.js API route
        method: "POST",
        body: { otp },
      }),
      onQueryStarted: withLoading(),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useVerifyOtpMutation } =
  authApi;
