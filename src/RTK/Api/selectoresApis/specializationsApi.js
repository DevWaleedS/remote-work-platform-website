import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const specializationsApi = createApi({
	reducerPath: "specializationsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.fayezbinsaleh.me/api/",
	}),

	endpoints: (builder) => ({
		// get default AddressApi endpoint..
		getSpecializations: builder.query({
			query: () => `specializations`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) =>
				response.data?.specializations,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetSpecializationsQuery } = specializationsApi;
