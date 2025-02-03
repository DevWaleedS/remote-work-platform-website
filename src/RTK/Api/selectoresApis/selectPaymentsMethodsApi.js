import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const selectPaymentsMethodsApi = createApi({
	reducerPath: "selectPaymentsMethodsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// get payment Method endpoint..
		getPaymentMethod: builder.query({
			query: () => `paymentMethod`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.paymenttypes,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetPaymentMethodQuery } = selectPaymentsMethodsApi;
