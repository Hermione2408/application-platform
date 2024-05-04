import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice"
export const appStore = configureStore(
    {
        reducer:{
            job:jobReducer
        }
    }
)