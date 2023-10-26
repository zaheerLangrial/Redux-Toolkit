import {configureStore} from '@reduxjs/toolkit'
import apiSlice from './Slices/ApiSlice'

const store = configureStore({
    reducer : {
        apiData : apiSlice
    }
})

export default store