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
    getProductsById: builder.query({
      query: (id) => `/productDetails/${id}`,
    }),
    saveUser: builder.mutation({
      query: ({ userData, email }) => ({
        url: `/user/${email}`,
        method: "PUT",
        body: userData,
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUser: builder.query({
      query: (email) => `/users/${email}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByIdQuery,
  useSaveUserMutation,
  useGetUsersQuery,
  useGetUserQuery,
} = baseApi;

export default baseApi;
