import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    saveProduct: builder.mutation({
      query: (product) => ({
        url: "/saveProduct",
        method: "POST",
        body: product,
      }),
    }),

    paymentProduct: builder.mutation({
      query: (productData) => ({
        url: "/payment",
        method: "POST",
        body: productData,
      }),
    }),

    getProducts: builder.query({
      query: () => "/allProducts",
      providesTags: ["Product"],
    }),

    getProductsByCategory: builder.query({
      query: (category) => `/allProducts/${category}`,
    }),

    getProductsById: builder.query({
      query: (id) => `/productDetails/${id}`,
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/deleteProduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    deleteCartProduct: builder.mutation({
      query: (id) => ({
        url: `/deleteCartProduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    saveCartProduct: builder.mutation({
      query: (product) => ({
        url: "/cartProduct",
        method: "POST",
        body: product,
      }),
    }),

    getCartProducts: builder.query({
      query: (email) => `/cartProducts/${email}`,
      // options: {
      //   fetchBaseQuery: {
      //     // Replace with your server's URL
      //     // baseUrl: "http://localhost:5000",
      //     // Include credentials: "include" if necessary
      //     // credentials: "include",
      //     // Additional headers if needed (e.g., authorization headers)
      //     headers: {
      //       authorization: `bearer ${localStorage.getItem('access_token')}`, // Retrieve the token from localStorage
      //     },
      //   },
      // },
    }),
    getPaymentProduct: builder.query({
      query: (email) => `/payment/${email}`,
    }),
  }),
});

export const {
  useSaveProductMutation,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useDeleteProductMutation,
  useGetProductsByIdQuery,
  useSaveCartProductMutation,
  useGetCartProductsQuery,
  useDeleteCartProductMutation,
  usePaymentProductMutation,
  useGetPaymentProductQuery,
} = productApi;
