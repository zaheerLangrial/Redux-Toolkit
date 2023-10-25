import { configureStore } from "@reduxjs/toolkit";
import UserSlices from "./slices/UserSlices";

const store = configureStore({
    reducer : {
        user : UserSlices
    }
})

export default store;