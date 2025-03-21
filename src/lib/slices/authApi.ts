// redux/authApi.ts
import { withLoading } from "@/utils/withLoading";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  message: string;
}

interface SignupRequest {
  email: string;
  password: string;
  role: string;
}
interface BusinessUpdateRequest {
  businessRegistrationNumber: string;
  industry: string;
  noOfEmployees: string;
  noOfSubscribers: string;
}


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth`,
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
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: withLoading(),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      onQueryStarted: withLoading(),
    }),
    resendOtp: builder.mutation({
      query: (email: string) => ({
        url: "/resendOTP", 
        method: "POST",
        body: { email },
      }),
      onQueryStarted: withLoading(),
    }),
    verifyOtp: builder.mutation({
      query: (otp: string) => ({
        url: "/verifyOTP", 
        method: "POST",
        body: { otp },
      }),
      onQueryStarted: withLoading(),
    }),
    updateBusiness: builder.mutation({
      query: (businessData: BusinessUpdateRequest) => ({
        url: "/company", 
        method: "PUT",
        body: businessData,
      }),
      onQueryStarted: withLoading(),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation, useVerifyOtpMutation, useResendOtpMutation, useUpdateBusinessMutation } = authApi;
