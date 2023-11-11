import {createSlice} from '@reduxjs/toolkit'
import { Products } from '../../components/ProductData'

export const ProductSlice = createSlice({
    name : 'Products',
    initialState : Products,
    reducers : {

    }
})
export default ProductSlice.reducer;
export const {} = ProductSlice.actions