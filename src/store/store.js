import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slice/listSlice'



const store = configureStore({
    reducer: {
        listing: listReducer
    }
})


export default store