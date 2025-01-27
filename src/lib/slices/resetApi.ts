// redux/authApi.ts
import { withLoading } from "@/utils/withLoading";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
    email: string;
    password: string;
}

interface RequestResponse {
    user: { id: string; email: string };
    token: string;
}

interface ResetRequest {
    otp: string;
    newPassword: string
}

export const resetApi = createApi({
    reducerPath: "resetApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth`,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        forgotPassword: builder.mutation({
            query: (credentials) => ({
                url: "/forget-password",
                method: "POST",
                body: credentials,
            }),
            onQueryStarted: withLoading(),
        }),
        setNewPassword: builder.mutation<string, ResetRequest>({
            query: (credentials) => ({
                url: "/reset-password",
                method: "POST",
                body: credentials,
            }),
            onQueryStarted: withLoading(),
        }),
    }),
});

export const { useForgotPasswordMutation, useSetNewPasswordMutation } =
    resetApi;
