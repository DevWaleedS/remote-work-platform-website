import axios from "axios";

const axiosBaseQuery =
	({ baseUrl } = { baseUrl: "" }) =>
	async ({ url, method, data, params, headers = {} }) => {
		const storeToken =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiXCJ7XFxcIk1lcmNoYW50X3VzZXJfaWRcXFwiOjMyNyxcXFwiTWVyY2hhbnRfc2Vzc2lvbl9pZFxcXCI6MzMzOTksXFxcIlVzZXJOYW1lXFxcIjpcXFwiQ2FzaGllclxcXCIsXFxcIlVzZXJJZFxcXCI6XFxcIjMyN1xcXCIsXFxcIk1lcmNoYW50SWRcXFwiOjU0MyxcXFwidG9rZW5cXFwiOlxcXCJkMmQxNTM4MDAyNmFjYTcyN2VlM2Q5MGM0NDE2YzQwNVxcXCJ9XCIiLCJuYmYiOjE3MjY2NTgwMTYsImV4cCI6MTc1ODE5NDAxNiwiaWF0IjoxNzI2NjU4MDE2fQ.soJf49gBKZW6okRm0xg-78c6aCyTijf8hHG-emZHb4g";

		try {
			const result = await axios({
				url: baseUrl + url,
				method,
				data,
				params,
				headers: {
					...headers,
					Authorization: `Bearer ${storeToken}`,
				},
			});
			return { data: result.data };
		} catch (axiosError) {
			let err = axiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};

export default axiosBaseQuery;
