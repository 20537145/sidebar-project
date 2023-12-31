import { configureStore } from "@reduxjs/toolkit";
import authSlice from './redux/userSlice'
export const store = configureStore({
    reducer: {
    auth : authSlice
    }
})