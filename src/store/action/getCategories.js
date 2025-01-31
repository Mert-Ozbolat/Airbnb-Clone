import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verb";
import { CATEGORIES } from "../../service/urls";


const getCategories = createAsyncThunk('categories/getCategory', async (params) => {
    try {
        const responce = await getRequest(CATEGORIES, params)
        console.log('Datas from API:', responce)
        return responce
    } catch (error) {
        console.error("Thunk Error in getMenuAction:", error.message || error);
    }
})

export default getCategories