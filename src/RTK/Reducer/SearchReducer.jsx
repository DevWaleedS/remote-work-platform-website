import { createSlice } from "@reduxjs/toolkit";
import { SearchThunk } from "../Thunk/SearchThunk";

const initialState = {
	loading: false,
	resultData: [],
	error: null,
};

const SearchReducer = createSlice({
	name: "search",
	initialState: initialState,
	reducers: {
		resetSearchResults: (state) => {
			state.resultData = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(SearchThunk.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(SearchThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.resultData = action?.payload?.data?.results;
			})
			.addCase(SearchThunk.rejected, (state, action) => {
				state.loading = false;
			});
	},
});
export const { resetSearchResults } = SearchReducer.actions;
export default SearchReducer.reducer;
