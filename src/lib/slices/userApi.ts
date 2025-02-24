import { createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import secureLocalStorage from "react-secure-storage";
import baseQueryWithAuth from "./interceptor";

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

  businessRegistrationNumber: string;
}

interface UpdatePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

interface NotificationPreferences {
  lowCreditsPush: boolean;
  lowCreditsEmail: boolean;
  remindersPush: boolean;
  remindersEmail: boolean;
  campaignCompletionPush: boolean;
  campaignCompletionEmail: boolean;
}
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery:baseQueryWithAuth,
  tagTypes: ["userDetails"], // ✅ Define cache tags
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (): FetchArgs => ({
        url: "user", 
        method: "GET",
      }),
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: any;
      }) => response.data,
      providesTags: ["userDetails"], 
    }),
    updateUser: builder.mutation<any, UpdateUserPayload>({
      query: (userData) => ({
        url: "user/profile",
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["userDetails"],
    }),
    updateBusiness: builder.mutation<any, UpdateBusinessPayload>({
      query: (businessData) => ({
        url: "business",
        method: "PUT",
        body: businessData,
      }),
      invalidatesTags: ["userDetails"], 
    }),
    updatePassword: builder.mutation<any, UpdatePasswordPayload>({
      query: (passwordData) => ({
        url: "user/update-password", 
        method: "PUT",
        body: passwordData,
      }),
    }),
    getNotificationSettings: builder.query({
      query:(): FetchArgs => ({
        url: "user/notification-settings", 
        method: "GET",
      }),
     
    }),
    updateNotificationPreferences: builder.mutation<void, NotificationPreferences>({
      query: (preferences) => ({
        url: "user/notification-settings",
        method: "PUT",
        body: preferences,
      }),
     
    }),
  }),
});

// Export hooks
export const {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
  useUpdateBusinessMutation,
  useUpdatePasswordMutation,
  useUpdateNotificationPreferencesMutation,
  useGetNotificationSettingsQuery
} = userApi;
