import { createSlice } from "@reduxjs/toolkit"
import getCategories from "../action/getCategories"


const initialState = {
    categories: [],
    selectedCategory: null,
    isLoading: false,
    error: null
}

const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.categories = action.payload
                state.error = null
            })
            .addCase(getCategories.rejected, (state) => {
                state.isLoading = false
                state.error = null
            })
    }
})
export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer