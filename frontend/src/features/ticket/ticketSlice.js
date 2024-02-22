import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
  singleTicket: null,
  tickets: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTicket.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.singleTicket = null;
        state.tickets = [];
        state.message = "";
      })
      .addCase(getAllTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleTicket = null;
        state.tickets = action.payload;
        state.message = "";
      })
      .addCase(getAllTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.singleTicket = null;
        state.tickets = [];
        state.message = action.payload;
      })

      // -------------GET SINGLE TICKET---------------------//

      .addCase(getSingleTicket.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.singleTicket = null;
        state.message = "";
      })
      .addCase(getSingleTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleTicket = action.payload;
        state.message = "";
      })
      .addCase(getSingleTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.singleTicket = null;
        state.message = action.payload;
      })


      // ---------------CLOSE SINGLE TICKET----------------------------------//

      .addCase(closeSingleTicket.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.singleTicket = null;
        state.message = "";
      })
      .addCase(closeSingleTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleTicket = action.payload;
        state.message = "";
      })
      .addCase(closeSingleTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.singleTicket = null;
        state.message = action.payload;
      })

    // ---------------------CREATE TICKET-----------------------//
    .addCase(generateTicket.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.singleTicket = null;
        state.message = "";
      })
      .addCase(generateTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleTicket = action.payload;
        state.message = "";
      })
      .addCase(generateTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.singleTicket = null;
        state.message = action.payload;
      })
  },
});

export default ticketSlice.reducer;

/// --------GET ALL TICKET--------------//

export const getAllTicket = createAsyncThunk(
  "GET/TICKETS",
  async (_, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await ticketService.getTicket(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// -------------GET SINGLE TICKET---------------------//

export const getSingleTicket = createAsyncThunk(
  "GET/SINGLETICKET",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await ticketService.fetchSingleTicket(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// ---------------CLOSE SINGLE TICKET----------------------------------//

export const closeSingleTicket = createAsyncThunk(
  "CLOSE/TICKET",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await ticketService.closeTicket(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/// ---------------CREATE TICKET----------------------------------//

export const generateTicket = createAsyncThunk('CREATE/TICKET', async(formData, thunkAPI) => {
try {
const token = await thunkAPI.getState().auth.user.token
return await ticketService.createTicket(formData, token)
} catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);  
}
})

