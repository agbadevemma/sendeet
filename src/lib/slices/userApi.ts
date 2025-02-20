import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import secureLocalStorage from "react-secure-storage";

interface UserData {
  token: string;
}

interface UpdateUserPayload {
  firstName: string;
  lastName: string;
  companyLogo: string;
  profilePicture: string;
}

interface UpdateBusinessPayload {
  companyName: string;
  address: string;
  website: string;
  businessRegistrationNumber: string;
  industry: string;
  noOfEmployees: string;
  noOfSubscribers: string;
  apiKey: string;
  fullName: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/`,
    prepareHeaders: (headers) => {
      const getAuthToken = secureLocalStorage.getItem(
        "userData"
      ) as unknown as UserData | null;
      if (getAuthToken?.token) {
        headers.set("authorization", `Bearer ${getAuthToken?.token ?? ""}`);
      }
      return headers;
    },
  }),
  tagTypes: ["userDetails"], // ✅ Define cache tags
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => "user",
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: any;
      }) => response.data,
      providesTags: ["userDetails"], // ✅ Provides "User" cache tag
    }),
    updateUser: builder.mutation<any, UpdateUserPayload>({
      query: (userData) => ({
        url: "user/profile",
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["userDetails"], // ✅ Invalidates and triggers `getUserDetails` refetch
    }),
    updateBusiness: builder.mutation<any, UpdateBusinessPayload>({
      query: (businessData) => ({
        url: "business/update",
        method: "PUT",
        body: businessData,
      }),
      invalidatesTags: ["userDetails"], // ✅ Ensures `getUserDetails` and business info are refetched
    }),
  }),
});

// Export hooks
export const {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
  useUpdateBusinessMutation,
} = userApi;
