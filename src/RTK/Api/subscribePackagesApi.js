import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const subscribePackagesApi = createApi({
	reducerPath: "subscribePackagesApi",

	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// get Home Page Data endpoint..
		getSubscribePackages: builder.query({
			query: () => `packages`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response?.data?.packages,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetSubscribePackagesQuery } = subscribePackagesApi;
