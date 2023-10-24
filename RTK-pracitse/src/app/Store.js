import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Features/TodoSlice/TodoSlice";

export const store = configureStore({
    reducer:TodoSlice
})