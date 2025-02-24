import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "./interceptor";

// Define the Contact type
export interface Contact {
  id?: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  tags?: string[];
}

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: baseQueryWithAuth, // ✅ Uses shared baseQueryWithAuth
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => ({ url: "contact" }),
      transformResponse: (response: { success: boolean; message: string; data: Contact[] }) =>
        response.data,
      providesTags: ["Contacts"],
    }),

    getContactById: builder.query<Contact, number>({
      query: (id) => ({ url: `contact/${id}` }),
      transformResponse: (response: { success: boolean; message: string; data: Contact }) =>
        response.data,
      providesTags: (result, error, id) => [{ type: "Contacts", id }],
    }),

    addContact: builder.mutation<Contact, Partial<Contact>>({
      query: (newContact) => ({
        url: "contact",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    updateContact: builder.mutation<Contact, { id: number; contact: Partial<Contact> }>({
      query: ({ id, contact }) => ({
        url: `contact/${id}`,
        method: "PUT",
        body: contact,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Contacts", id }],
    }),

    deleteContact: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Contacts", id }],
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
