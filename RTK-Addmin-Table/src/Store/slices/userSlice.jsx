import {createSlice , nanoid} from '@reduxjs/toolkit'

const useSlices = createSlice({
    name : 'User' , 
    initialState : [],
    reducers : {
        addUser (state , action) {
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser (state , action) {
            console.log(action.payload)
            state.splice(action.payload , 1)
        },
        deleteAllUsers (state , actio) {
            return [];
        }
    }
})
export const {addUser , removeUser , deleteAllUsers } = useSlices.actions

export default useSlices.reducer