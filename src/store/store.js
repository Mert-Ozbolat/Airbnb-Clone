import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slice/listSlice'
import bookingReducer from './slice/bookingSlice'


const store = configureStore({
    reducer: {
        listing: listReducer,
        booking: bookingReducer,
    }
})


export default store