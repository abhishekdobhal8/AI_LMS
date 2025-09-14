import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./useSlice.js"

export const store = configureStore({
    reducer: {
        user: userSlice
    }     
})