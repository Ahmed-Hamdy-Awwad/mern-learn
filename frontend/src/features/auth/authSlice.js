import authService from "./authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	message: "",
	isError: false,
	isLoading: false,
	isSuccess: false,
	user: user ? user : null,
};

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
	try {
		return await authService.register(user);
	} catch (error) {
		const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue({ message });
	}
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.message = "";
			state.isError = false;
			state.isLoading = false;
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(register.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.user = action.payload;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.message = action.payload.message;
		});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
