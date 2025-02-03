import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const selectServicesApi = createApi({
	reducerPath: "selectServicesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// get payment Method endpoint..
		getServicesSelector: builder.query({
			query: () => `services?all=1`,

			transformResponse: (response, meta, arg) => response.data?.Services,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetServicesSelectorQuery } = selectServicesApi;
