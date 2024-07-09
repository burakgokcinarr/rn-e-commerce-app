import { createSlice } from '@reduxjs/toolkit'
import { DUMMY_DATA } from '../../dummy/Data'

const initialState = {
    data: DUMMY_DATA,
    category: ["Smart Watch"]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        categoryData: (state, action) => {
            const uniqueCategories = Array.from(new Set(state.data.map(item => item.category)));
            state.category = [state.category, ...uniqueCategories];
        }
    }
})

export const { categoryData } = productSlice.actions

export default productSlice.reducer