import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const selectNationalitiesApi = createApi({
	reducerPath: "selectNationalitiesApi",

	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.fayezbinsaleh.me/api/",
	}),

	endpoints: (builder) => ({
		// get nationalities endpoint..
		getNationalities: builder.query({
			query: () => `nationalities`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.nationalities,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetNationalitiesQuery } = selectNationalitiesApi;
