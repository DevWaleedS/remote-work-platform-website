import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const searchInHomePageApi = createApi({
	reducerPath: "searchInHomePageApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// search in home page endpoint..
		searchInHomePage: builder.mutation({
			query: ({ query }) => `searchIndex?query=${query}`,
		}),
	}),
});

// Export endpoints and hooks
export const { useSearchInHomePageMutation } = searchInHomePageApi;
