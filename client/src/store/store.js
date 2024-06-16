import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { authApiReducer, authApiSlice } from "./authApiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        authApi: authApiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiSlice.middleware),
})