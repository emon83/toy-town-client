import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import baseApi from "./api/baseApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath] : baseApi.reducer,
        userSlice: userSlice, 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store;