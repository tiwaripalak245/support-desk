import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
    notes: [],
    isLoading: false,
    isSuccess: false,
    isError: false
}

const noteSlice = createSlice({
    name: "note", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
builder.addCase(getNotes.pending, (state) => {
state.isLoading = true
state.isSuccess = false
state.isError = false
state.notes = []
})
.addCase(getNotes.fulfilled, (state, action) => {
    state.isLoading = false
    state.isSuccess = true
    state.isError = false
    state.notes = action.payload
})
.addCase(getNotes.rejected, (state) => {
    state.isLoading = false
state.isSuccess = false
state.isError = true
state.notes = []
})
builder.addCase(createNotes.pending, (state) => {
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
    state.notes = []
    })
    .addCase(createNotes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.notes = action.payload
    })
    .addCase(createNotes.rejected, (state) => {
        state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.notes = []
    })
    }
})

export default noteSlice.reducer

export const getNotes = createAsyncThunk("GET/NOTES", async(id, thunkAPI) => {
    try {
   const token = await thunkAPI.getState().auth.user.token 
   return await noteService.viewNotes(id, token)
    } catch (error) {
      const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


export const createNotes = createAsyncThunk("CREATE/NOTES", async(id, thunkAPI) => {
    try {
   const token = await thunkAPI.getState().auth.user.token 
   return await noteService.makeNotes(id, token)
    } catch (error) {
      const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
