import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create API slice
export const commonQuestionApi = createApi({
	reducerPath: "commonQuestionApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://backend.atlbha.com/api/",
	}),

	endpoints: (builder) => ({
		// get Home Page Data endpoint..
		getCommonQuestions: builder.query({
			query: () => `commonquestion`,

			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response, meta, arg) =>
				response.data?.commonQuestions,
		}),
	}),
});

// Export endpoints and hooks
export const { useGetCommonQuestionsQuery } = commonQuestionApi;
