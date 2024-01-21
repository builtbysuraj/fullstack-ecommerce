import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ENV } from '@/conf'
import { ProductType } from '@/types'

export const productApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: ENV.API_BASE_URL }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
      providesTags: ['product'],
    }),
    getProductById: builder.query<ProductType, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi
