import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const websitePageApi = createApi({
	reducerPath: "websitePageApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	tagTypes: ["Post"],

	endpoints: (builder) => ({
		// get Web site Page By Id endpoint..
		getWebsitePageById: builder.query({
			query: (arg) => `page/${arg?.id}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.pages,

			providesTags: (result, error, id) => [{ type: "Post", id }],
		}),
	}),
});

// Export endpoints and hooks
export const { useGetWebsitePageByIdQuery } = websitePageApi;
