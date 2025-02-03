import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const selectCountriesApi = createApi({
	reducerPath: "selectCountriesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.fayezbinsaleh.me/api/",
	}),

	endpoints: (builder) => ({
		// get countries endpoint..
		getCountries: builder.query({
			query: () => `countries`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.countries,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetCountriesQuery } = selectCountriesApi;
