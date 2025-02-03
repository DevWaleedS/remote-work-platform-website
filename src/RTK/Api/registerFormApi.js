import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const registerFormApi = createApi({
	reducerPath: "registerFormApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.fayezbinsaleh.me/api/",
	}),

	endpoints: (builder) => ({
		// create handle Send Register Request endpoint
		sendRegisterRequest: builder.mutation({
			query: ({ credentials }) => ({
				url: `subscription`,
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});

// Export endpoints and hooks
export const { useSendRegisterRequestMutation } = registerFormApi;
