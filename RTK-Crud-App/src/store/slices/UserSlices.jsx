import {createSlice} from '@reduxjs/toolkit'
import { UserData } from '../../data'

const userSlice = createSlice ({
    name : 'users' ,
    initialState : UserData,
    reducers : {
        addNewUser (state , action) {
            console.log(state)
        }
    }
})

export default userSlice.reducer
export const {addNewUser} = userSlice.actions