import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verb";
import { LISTING } from "../../service/urls";


const getSearch = createAsyncThunk('search/searchItems', async (params) => {
    try {
        const responce = await getRequest(LISTING, params)
        console.log('Datas from API:', responce)
        return responce
    } catch (error) {
        console.error("Thunk Error in getMenuAction:", error.message || error);
    }
})

export default getSearch