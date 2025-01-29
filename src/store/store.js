import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slice/listSlice'
import bookingReducer from './slice/bookingSlice'
import searchReducer from './slice/searchSlice'

const store = configureStore({
    reducer: {
        listing: listReducer,
        booking: bookingReducer,
        search: searchReducer,
    }
})


export default store