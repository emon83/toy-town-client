import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  //tagTypes: [""],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/allProducts",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/allProducts/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = baseApi;

export default baseApi;
