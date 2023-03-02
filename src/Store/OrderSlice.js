import {createSlice} from "@reduxjs/toolkit"

const initialState = { order: null}

const orderSlice  = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder(state, action) {
            state.order = action.payload
        },
        logout(state) {
            state.order = null
        }
    }
})


export const orderActions = orderSlice.actions
export default orderSlice.reducer