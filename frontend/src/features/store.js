import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import ticketReducer from "./ticket/ticketSlice";
import noteReducer from './notes/noteSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
    note: noteReducer,
  },
});

export default store;
