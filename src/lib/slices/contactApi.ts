import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import secureLocalStorage from 'react-secure-storage';

// Define the Contact type
export interface Contact {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    tags?: string[];
}


interface UserData {
    token: string;
}

// Utility function to get the token
const getAuthToken = secureLocalStorage.getItem("userData") as unknown as UserData | null;

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/`,
        prepareHeaders: (headers) => {
            console.log("token", getAuthToken?.token);
            // if (!getAuthToken?.token) {
            //     window.location.reload()
            // }
            if (getAuthToken?.token) {
                headers.set("authorization", `Bearer ${getAuthToken?.token ?? ""}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Contacts"],
    endpoints: (builder) => ({
        getContacts: builder.query({
            transformResponse: (response: { success: boolean; message: string; data: any }) => response.data,
            query: () => 'contact',
            providesTags: ["Contacts"],
        }),
        getContactById: builder.query<Contact, number>({
            transformResponse: (response: { success: boolean; message: string; data: any }) => response.data,
            query: (id) => `contact/${id}`, // Fetch by ID
            providesTags: (result, error, id) => [{ type: "Contacts", id }],
        }),

        addContact: builder.mutation<Contact, Partial<Contact>>({
            query: (newContact) => ({
                url: 'contact',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: ["Contacts"],
        }),

        updateContact: builder.mutation<Contact, { id: number; contact: Partial<Contact> }>({
            query: ({ id, contact }) => ({
                url: `contact/${id}`,
                method: 'PUT',
                body: contact,
            }),
            invalidatesTags: ["Contacts"],
        }),
        deleteContact: builder.mutation<{ success: boolean; id: string }, number>({
            query: (id) => ({
                url: `contact/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Contacts"],
        }),
    }),
});

// Export hooks
export const {
    useAddContactMutation,
    useGetContactByIdQuery,
    useGetContactsQuery,
    useUpdateContactMutation,
    useDeleteContactMutation,
} = contactApi;
