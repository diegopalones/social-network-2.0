import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
    user: null,

};

export const register = createAsyncThunk("auth/register", async (user) => {
    try {
        return await authService.register(user);
    } catch (error) {
        console.error(error);
    }
});

export const login = createAsyncThunk("auth/login", async (user) => {
    try {
        return await authService.login(user);
    } catch (error) {
        console.error(error);
    }
});

export const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
    
          state.isError = false;
          
          state.isSuccess = false;
          state.isSuccessLogout = false;
    
          state.message = "";
          
          },
      },

});
export const { reset } = authSlice.actions;
export default authSlice.reducer;