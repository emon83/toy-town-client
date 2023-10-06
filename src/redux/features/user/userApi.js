import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useSaveUserMutation, useGetUsersQuery, useGetUserQuery } =
  userApi;
