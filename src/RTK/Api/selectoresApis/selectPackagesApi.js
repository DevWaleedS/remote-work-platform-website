import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const selectPackagesApi = createApi({
	reducerPath: "selectPackagesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.fayezbinsaleh.me/api/",
	}),

	endpoints: (builder) => ({
		// get packages endpoint..
		getPackages: builder.query({
			query: () => `packages`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.packages,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetPackagesQuery } = selectPackagesApi;
