import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        repos: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.user = null
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllUserRepos.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getAllUserRepos.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.repos = action.payload
                state.isError = false
            })
            .addCase(getAllUserRepos.rejected, (state, action) => {
                state.repos = null
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export default authSlice.reducer;

export const getAllUsers = createAsyncThunk('FETCH/USERS', async (formData) => {
    return await authService.getUsers(formData)
})

export const getAllUserRepos = createAsyncThunk('FETCH/REPOS', async (formData) => {
    return await authService.getUserRepos(formData)
})