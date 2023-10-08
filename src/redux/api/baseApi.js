import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://toy-town-server-emon83.vercel.app" }),
  tagTypes: ["Users", "Product"],
  endpoints: () => ({}),
});

export default baseApi;
