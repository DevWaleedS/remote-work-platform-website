import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API Slice
export const homeApi = createApi({
	reducerPath: "homeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// get Home Page Data endpoint...
		getHomePageData: builder.query({
			query: (arg) => `index?page=${arg.page}&number=${arg.number}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,
		}),

		// Filter and search in stores...
		filterStores: builder.mutation({
			query: ({ storeName, cityId, categoryId }) =>
				storeName && cityId && categoryId
					? `storesFilter?name=${storeName}&city_id=${cityId}&category_id=${categoryId}`
					: storeName && cityId
					? `storesFilter?name=${storeName}&city_id=${cityId}`
					: storeName && categoryId
					? `storesFilter?name=${storeName}&category_id=${categoryId}`
					: cityId && categoryId
					? `storesFilter?city_id=${cityId}&category_id=${categoryId}`
					: storeName
					? `storesFilter?name=${storeName}`
					: cityId
					? `storesFilter?city_id=${cityId}`
					: categoryId
					? `storesFilter?category_id=${categoryId}`
					: null,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetHomePageDataQuery, useFilterStoresMutation } = homeApi;
