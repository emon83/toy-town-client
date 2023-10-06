import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
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
    saveCartProduct: builder.mutation({
      query: (product) => ({
        url: "/cartProduct",
        method: "POST",
        body: product,
      }),
    }),
    getCartProducts: builder.query({
        query: (email) => `/cartProducts/${email}`,
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByIdQuery,
  useSaveCartProductMutation,
  useGetCartProductsQuery,
} = productApi;
