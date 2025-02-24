// src/features/campaignApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "./interceptor";

export interface UploadFile {
  url: string;
  dateTime: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  messageType: string;
  targetAudience: string;
  message: string;
  uploadFiles: UploadFile[];
  actionButtons: string[];
  sendOption: string;
  timeZone: string;
  deliveryTime: string[];
  messageContent: string;
  isPublished: boolean;
}

export const campaignApi = createApi({
  reducerPath: "campaignApi",
  baseQuery: baseQueryWithAuth, // ✅ Uses shared baseQueryWithAuth
  tagTypes: ["Campaign"],
  endpoints: (builder) => ({
    createCampaign: builder.mutation<Campaign, Campaign>({
      query: (newCampaign) => ({
        url: "campaigns",
        method: "POST",
        body: newCampaign,
      }),
      invalidatesTags: [{ type: "Campaign", id: "LIST" }],
    }),

    getCampaignsList: builder.query<Campaign[], void>({
      query: () => ({ url: "campaigns" }),
      providesTags: ["Campaign"],
    }),

    updateCampaign: builder.mutation<Campaign, { id: string; updatedCampaign: Campaign }>({
      query: ({ id, updatedCampaign }) => ({
        url: `campaigns/${id}`,
        method: "PUT",
        body: updatedCampaign,
      }),
      invalidatesTags: [{ type: "Campaign", id: "LIST" }],
    }),

    deleteCampaign: builder.mutation<void, string>({
      query: (id) => ({
        url: `campaigns/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Campaign", id: "LIST" }],
    }),
  }),
});

// Export hooks
export const {
  useCreateCampaignMutation,
  useGetCampaignsListQuery,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation,
} = campaignApi;
