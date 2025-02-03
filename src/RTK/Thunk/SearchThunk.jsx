import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchThunk = createAsyncThunk(
	"SearchThunk",
	async (arg, thunkAPI) => {
		let { rejectWithValue } = thunkAPI;
		try {
			let res = await axios.get(
				`https://backend.atlbha.com/api/searchIndex?query=${arg.query}`
			);
			return res.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
