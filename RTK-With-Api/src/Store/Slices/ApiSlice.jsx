import {createAsyncThunk , createSlice} from '@reduxjs/toolkit'
import axios, {Axios} from 'axios'

export const apiData = createAsyncThunk('apiData', async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      return response.data;
    } catch (error) {
      console.error('Error', error);
      throw error; 
    }
  });


export const apiSlice = createSlice ({
    name : 'ApiData' , 
    initialState : {
        users : [],
        loading : false,
        error : null
    }, 
    extraReducers: (builder) => {
        builder 
        .addCase(apiData.pending , (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(apiData.fulfilled , (state , action) => {
            state.loading = false
            state.users = action.payload;
        })
        .addCase(apiData.rejected , (state , action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})
export default apiSlice.reducer