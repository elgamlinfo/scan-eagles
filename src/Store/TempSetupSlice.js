import { createSlice } from "@reduxjs/toolkit";


const initialState = {temp: 4}

const tempSetupSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {

    }
})


export default tempSetupSlice.reducer