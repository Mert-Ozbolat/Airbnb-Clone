import { createSlice } from "@reduxjs/toolkit"
import getList from "../action/getList"

const initialState = {
    list: [],
    isLoading: false,
    error: null
}

const listSlice = createSlice({
    name: 'Listing',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getList.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getList.fulfilled, (state, action) => {
                state.isLoading = false
                state.list = action.payload
                state.error = null
            })
            .addCase(getList.rejected, (state) => {
                state.isLoading = false
                state.error = null
            })
    }
})

export default listSlice.reducer