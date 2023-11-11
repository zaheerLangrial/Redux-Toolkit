import {createSlice} from '@reduxjs/toolkit'


export const CartSlice = createSlice({
    name : 'Cart',
    initialState : [] ,
    reducers : {
        additem (state , action) {
            let item = action.payload;
            const productItem = state.find((product) => product.id === item.id);
            if(productItem) {
                productItem.quantity +=1;
            }else{
                state.push(item)
            }
        },
        incrementQ (state , action) {
             const item = state.find((product) => product.id === action.payload)
            if(item) {
                item.quantity +=1;
            }
        },
        decrementQ (state , action) {
            const item = state.find((product) => product.id === action.payload)
            if(item) {
                if(item.quantity > 1) {
                    item.quantity -=1;
                }
            }
        }
    }
})
export default CartSlice.reducer;
export const {additem , incrementQ , decrementQ} = CartSlice.actions