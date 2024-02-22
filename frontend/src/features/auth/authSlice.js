import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";



const userExist = JSON.parse(localStorage.getItem("user"))
const initialState = {
user : userExist ? userExist : null,
isLoading: false,
isSuccess : false,
isError : false,

message: ""

}

const authSlice = createSlice({
    name: "auth",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
builder.addCase(userRegister.pending, (state) => {
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
    state.user = null
    state.message = ""
})
builder.addCase(userRegister.fulfilled, (state, action) => {
    state.isSuccess = true

    state.isLoading = false
    state.isError = false
    state.user = action.payload
    state.message = ""
})
builder.addCase(userRegister.rejected, (state,action) => {
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.user = null
    state.message = action.payload
})
builder.addCase(userLogin.pending, (state) => {
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
    state.user = null
    state.message = ""
})
builder.addCase(userLogin.fulfilled, (state, action) => {
    state.isSuccess = true
    state.isLoading = false
    state.isError = false
    state.user = action.payload
    state.message = ""
})
builder.addCase(userLogin.rejected, (state, action) => {
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.user = null
    state.message = action.payload
})
builder.addCase(LogoutUser.fulfilled, (state, action) => {
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.user = null
    state.message = ""
})

    }
})

export default authSlice.reducer

export const userRegister = createAsyncThunk('REGISTER/USER', async(formData, thunkAPI) => {
    try {
    return await authService.registerUser(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const userLogin = createAsyncThunk('LOGIN/USER', async(formData, thunkAPI) => {
    try {
    return await authService.loginUser(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const LogoutUser = createAsyncThunk('LOGOUT/USER', async() => {
localStorage.removeItem('user')
})