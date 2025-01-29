import { createSlice } from "@reduxjs/toolkit"
import getSearch from "../action/getSearch"


const initialState = {
    inputValue: null,
    results: [],
    isLoading: false,
    error: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.pending, state => {
                state.isLoading = true
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.isLoading = false
                state.results = action.payload
                state.error = null
            })
            .addCase(getSearch.rejected, (state) => {
                state.error = 'Beklenmedik Hata'
            })
    }
})

export default searchSlice.reducer