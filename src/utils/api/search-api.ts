import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://127.0.0.1:3000';


export const searchAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, }),
  endpoints: build => ({
    search: build.query({
      query: () => '/',
    }),
    getUserData: build.mutation({
      query: (searchString) => `?term=${searchString}`,
    })
  })
});
