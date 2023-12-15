import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	user: string | null;
	token: string | null;
}

interface LoginCredentials {
	user: string;
	accessToken: string;
}

//First, let's create the thunk

const initialState: AuthState = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<LoginCredentials>) => {
			const { user, accessToken } = action.payload;
			state.user = user;
			state.token = accessToken;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
		},
	},
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: { auth: AuthState }) =>
	state.auth.user;
export const selectCurrentToken = (state: { auth: AuthState }) =>
	state.auth.token;

// -----------------Notes for studying----------------//

//Parts of the slice:
// name: The name of the slice
// initialState: The initial state of the slice
// reducers: An object that contains the reducers

//Selectors are functions that take the state as an argument and return a part of the state. They are like getters in a certain way.
