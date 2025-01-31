import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slice/listSlice'
import bookingReducer from './slice/bookingSlice'
import searchReducer from './slice/searchSlice'
import categoryReducer from './slice/categoriesSlice';


const store = configureStore({
    reducer: {
        listing: listReducer,
        booking: bookingReducer,
        category: categoryReducer,
        search: searchReducer,
    }
})


export default store