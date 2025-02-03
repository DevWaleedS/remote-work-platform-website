import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../API/axiosBaseQuery";

// Create API slice
export const servicesApi = createApi({
	reducerPath: "servicesApi",

	// base url
	baseQuery: axiosBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	tagTypes: ["Services", "ShowService", "ShowServiceOrder"],

	endpoints: (builder) => ({
		// get services Data endpoint..
		getServices: builder.query({
			query: ({ pageNumber, currentPage }) => ({
				url: `services?page=${currentPage}&number=${pageNumber}`,
			}),

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,

			providesTags: ["Services"],
		}),

		getServiceById: builder.query({
			query: ({ id }) => ({ url: `showServiceDetail/${id}` }),

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.service,
			providesTags: ["ShowService"],
		}),

		// showServiceOrder
		showServiceOrder: builder.query({
			query: ({ id }) => ({ url: `showServiceOrder/${id}` }),

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.websiteorder,
			providesTags: ["ShowServiceOrder"],
		}),

		serviceCheckout: builder.mutation({
			query: ({ body }) => ({
				url: `serviceCheckout`,
				method: "POST",
				data: body,
			}),
			headers: {
				"Content-Type": "application/json",
			},

			invalidatesTags: ["Services"],
		}),

		// Checkout with madfu payment method
		loginWithMadfu: builder.mutation({
			query: ({ body }) => ({
				url: `madfu/login`,
				method: "POST",
				data: body,
			}),
		}),

		// Handle create order with madfu payment method
		createOrderWithMadfu: builder.mutation({
			query: ({ body }) => ({
				url: `madfu/create-order`,
				method: "POST",
				data: body,
			}),
		}),

		// apply Services Coupon
		applyServicesCoupon: builder.mutation({
			query: ({ body }) => {
				return {
					url: `serviceCheckout`,
					method: "POST",
					data: body,
				};
			},
			invalidatesTags: ["ShowServiceOrder"],
		}),

		// removeServiceCoupon
		removeServiceCoupon: builder.mutation({
			query: ({ id }) => {
				return {
					url: `removeServiceCoupon/${id}`,
					method: "GET",
				};
			},
			invalidatesTags: ["ShowServiceOrder", "ShowService"],
		}),
	}),
});

// Export endpoints and hooks
export const {
	useGetServicesQuery,
	useGetServiceByIdQuery,
	useLoginWithMadfuMutation,
	useShowServiceOrderQuery,
	useCreateOrderWithMadfuMutation,
	useServiceCheckoutMutation,
	useApplyServicesCouponMutation,
	useRemoveServiceCouponMutation,
} = servicesApi;
