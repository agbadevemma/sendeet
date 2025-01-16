// src/features/campaignApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    reducerPath: 'campaignApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/campaign`}), // Replace with your API URL
    tagTypes: ['Campaign'],
    endpoints: (builder) => ({
        createCampaign: builder.mutation<Campaign, Campaign>({
            query: (newCampaign) => ({
                url: 'campaigns',
                method: 'POST',
                body: newCampaign,
            }),
            invalidatesTags: [{ type: 'Campaign', id: 'LIST' }],
        }),
        getCampaignsList: builder.query<Campaign[], void>({
            query: () => 'campaigns',
            providesTags: ['Campaign'],
        }),
        updateCampaign: builder.mutation<Campaign, { id: string; updatedCampaign: Campaign }>({
            query: ({ id, updatedCampaign }) => ({
                url: `campaigns/${id}`,
                method: 'PUT',
                body: updatedCampaign,
            }),
            invalidatesTags: [{ type: 'Campaign', id: 'LIST' }],
        }),
        deleteCampaign: builder.mutation<void, string>({
            query: (id) => ({
                url: `campaigns/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Campaign', id: 'LIST' }],
        }),
    }),
});

export const {
    useCreateCampaignMutation,
    useGetCampaignsListQuery,
    useUpdateCampaignMutation,
    useDeleteCampaignMutation,
} = campaignApi;
