import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const blogsApi = createApi({
	reducerPath: "blogsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	tagTypes: ["Posts"],

	endpoints: (builder) => ({
		// get Home Page Data endpoint..
		getAllBlogs: builder.query({
			query: ({ postCategoryId, postsNumber }) =>
				postCategoryId === 0
					? `posts?number=${postsNumber}`
					: `posts?number=${postsNumber}&post_category_id=${postCategoryId}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data,
		}),

		// get post details by post id
		getPostDetailsByPostId: builder.query({
			query: ({ postId }) => `show_post/${postId}`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) => response.data?.pages[0],
			providesTags: ["Posts"],
		}),

		// search in blogs
		searchInBlogs: builder.mutation({
			query: ({ postCategoryId, query }) => ({
				url:
					postCategoryId === 0
						? `searchPost?query=${query}`
						: `searchPost?query=${query}&post_category_id=${postCategoryId}`,
				method: "GET",
			}),

			invalidatesTags: ["Posts"],
		}),
	}),
});

// Export endpoints and hooks
export const {
	useGetAllBlogsQuery,
	useGetPostDetailsByPostIdQuery,
	useSearchInBlogsMutation,
} = blogsApi;
