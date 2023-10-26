import {createSlice} from '@reduxjs/toolkit'
import { UserData } from '../../data'

const userSlice = createSlice ({
    name : 'users' ,
    initialState : UserData,
    reducers : {
        addNewUser (state , action) {
            state.push(action.payload)
        },
        removeUser (state , action) {
            state.pop(action.payload , 1)
        },
        editUser (state , action) {
            const {id , name , email} = action.payload
            const updateuser = state.find((user) => user.id == action.payload.id)
            if(updateuser){
                updateuser.name = name;
                updateuser.email = email;
            }
        },
    }
})

export default userSlice.reducer
export const {addNewUser , removeUser , editUser} = userSlice.actions