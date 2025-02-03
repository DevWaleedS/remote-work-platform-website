import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// get All Products endpoint...
		getSouqAtlbhaProducts: builder.query({
			query: ({ pageNumber, currentPage, category_id }) =>
				category_id
					? `home/products?category_id=${category_id}?page=${currentPage}&number=${pageNumber}`
					: `home/products?page=${currentPage}&number=${pageNumber}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,
		}),

		// get Special Products endpoint...
		getSpecialProducts: builder.query({
			query: ({ pageNumber, currentPage }) =>
				`home/specialProducts?page=${currentPage}&number=${pageNumber}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetSouqAtlbhaProductsQuery, useGetSpecialProductsQuery } =
	productsApi;
