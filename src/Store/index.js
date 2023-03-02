import {configureStore} from '@reduxjs/toolkit'
import TempReducer from './TempSetupSlice'
import MainDataSlice from './MainDataSlice'
import cartSlice from './cartSlice'
import orderSlice from './OrderSlice'

const store = configureStore({
    reducer: {
        temp: TempReducer,
        mainData: MainDataSlice,
        cart: cartSlice,
        order: orderSlice
    }
})


export default store