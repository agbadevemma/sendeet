import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import secureLocalStorage from "react-secure-storage";


interface UserData {
    token: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/`, prepareHeaders: (headers) => {
            const getAuthToken = secureLocalStorage.getItem("userData") as unknown as UserData | null;
            if (getAuthToken?.token) {
                headers.set("authorization", `Bearer ${getAuthToken?.token ?? ""}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            transformResponse: (response: { success: boolean; message: string; data: any }) => response.data,
            query: () => "user",
        }),
    }),
});

// Export hooks
export const { useGetUserDetailsQuery } = userApi;
