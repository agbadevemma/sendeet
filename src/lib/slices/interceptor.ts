import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

import secureLocalStorage from 'react-secure-storage';
import { authApi } from './authApi';


interface UserData {
    token: string;
  }
  
const baseQuery = fetchBaseQuery({
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
  });
  const baseQueryWithAuth: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    // If 401 error, trigger the logout API
    if (result?.error?.status === 401) {
      await api.dispatch(authApi.endpoints.logout.initiate());
      window.location.reload();
    }
  
    return result;
  };
  
  export default baseQueryWithAuth;