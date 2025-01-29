import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pricePerNight: 0,
    checkIn: new Date().toISOString().split("T")[0],
    checkOut: null,
    nights: 1
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.pricePerNight = action.payload;
        },
        setCheckIn: (state, action) => {
            state.checkIn = action.payload
            state.nights = state.checkOut ? calculateNights(action.payload, state.checkOut) : 1;
        },
        setCheckOut: (state, action) => {
            state.checkOut = action.payload
            state.nights = state.checkIn ? calculateNights(state.checkIn, action.payload,) : 1;
        }
    }
})

const calculateNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return 1;

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (isNaN(startDate) || isNaN(endDate)) return 1;

    const diff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
};


export const { setPrice, setCheckIn, setCheckOut } = bookingSlice.actions;
export default bookingSlice.reducer;