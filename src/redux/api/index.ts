import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const BaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
});

const baseQueryExtends: BaseQueryFn = async (arg, api, extraOptions) => {
  const result = BaseQuery(arg, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtends,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["auth"],
  endpoints: () => ({}),
});
