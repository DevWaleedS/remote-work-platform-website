import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const ourWorksApi = createApi({
	reducerPath: "ourWorksApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	tagTypes: ["OurWorks"],

	endpoints: (builder) => ({
		// get All Our Works ...
		getAllOurWorks: builder.query({
			query: ({ postCategoryId, postsNumber }) =>
				postCategoryId === 0
					? `posts?number=${postsNumber}&ourworks_posts=1`
					: `posts?number=${postsNumber}&post_category_id=${postCategoryId}&ourworks_posts=1`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,
		}),

		// search in blogs
		searchInOurWorks: builder.mutation({
			query: ({ postCategoryId, query }) => ({
				url:
					postCategoryId === 0
						? `searchPost?query=${query}&ourworks_posts=1`
						: `searchPost?query=${query}&post_category_id=${postCategoryId}&ourworks_posts=1`,

				method: "GET",
			}),

			invalidatesTags: ["OurWorks"],
		}),
	}),
});

// Export endpoints and hooks
export const { useGetAllOurWorksQuery, useSearchInOurWorksMutation } =
	ourWorksApi;
