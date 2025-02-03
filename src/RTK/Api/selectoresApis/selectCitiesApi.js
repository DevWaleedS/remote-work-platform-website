import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const selectCitiesApi = createApi({
	reducerPath: "selectCitiesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.fayezbinsaleh.me/api/",
	}),

	endpoints: (builder) => ({
		// get default AddressApi endpoint..
		getAreasByCountryId: builder.query({
			query: ({ country_id }) => `areas/${country_id || 1}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.areas,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetAreasByCountryIdQuery } = selectCitiesApi;
