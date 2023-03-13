import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    cart: {
        qnt: 0,
        totalPrice: 0,
        dishes: []
    },
    cartLoading: false
}

export const getCart = createAsyncThunk(
    'cart/getCart', 
    () => {
        return JSON.parse(localStorage.getItem('cart'))
    }   
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: {
        [getCart.pending]: (state) => {
            state.cartLoading = true
        },
        [getCart.fulfilled]: (state, {payload}) => {
            if(payload){
                state.cart=payload
                state.cartLoading = false
            }
        }
    },
    reducers: {
        addToCart (state, action) {
            let newItem = action.payload
            let isExist = state.cart.dishes.find(product => product.key === newItem.key && product.price.type === newItem.price.type)
            if(newItem.price.type) {
                if(!isExist) {
                    let data = newItem
                    state.cart.dishes.push({...data, total_price: data.price.price, quantity: 1})
                    state.cart.totalPrice = state.cart.totalPrice + newItem.price.price
                    state.cart.qnt = state.cart.qnt+1;
                }else {
                    state.cart.totalPrice = state.cart.totalPrice + newItem.price.price
                    isExist.quantity = isExist.quantity+1;
                    isExist.total_price = isExist.total_price+newItem.price.price
                    state.cart.qnt = state.cart.qnt+1;
                }
            }else {
                if(!isExist) {
                    let data = newItem
                    state.cart.dishes.push({...data, total_price: data.price, quantity: 1})
                    state.cart.totalPrice = state.cart.totalPrice + newItem.price
                    state.cart.qnt = state.cart.qnt+1;
                }else {
                    state.cart.totalPrice = state.cart.totalPrice + newItem.price
                    isExist.quantity = isExist.quantity+1;
                    isExist.total_price = isExist.total_price+newItem.price
                    state.cart.qnt = state.cart.qnt+1;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        addOneItem(state, action) {
            let newItem = action.payload
            let isExist = state.cart.dishes.find(product => product.key === newItem.key&&JSON.stringify([product.additions]) === JSON.stringify([newItem.additions]) && product.more_details === newItem.more_details)
            isExist.total_price += newItem.price;
            state.cart.totalPrice += newItem.price;
            isExist.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeOneItem (state, action) {
            let newItem = action.payload
            if(newItem.price.type) {
                let isExist = state.cart.dishes.find(product => product.key === newItem.key && product.price.type === newItem.price.type)
                if(isExist.quantity === 1){
                    state.cart.dishes = state.cart.dishes.filter(prod => {
                        if(prod.key === newItem.key) {
                            if (prod.price.type !== newItem.price.type) { 
                                return prod;
                            }
                        }else {
                            return prod;
                        }
                    })
                    state.cart.qnt = state.cart.qnt-1;

                }else{
                    isExist.quantity--;
                    isExist.total_price -= newItem.price.price
                }
            }else { 
                let isExist = state.cart.dishes.find(product => product.key === newItem.key)
                if(isExist.quantity === 1){
                    state.cart.dishes = state.cart.dishes.filter(prod => prod.key !== newItem.key)
                    state.cart.qnt = state.cart.qnt-1;

                }else{
                    isExist.quantity--;
                    isExist.total_price -= newItem.price
                }
            }
            state.cart.totalPrice = state.cart.totalPrice-newItem.price
        },
        editItem(state, action) {
            let newItem = action.payload.new
            let oldItem = action.payload.old
            let isExist = state.cart.dishes.find(product => product.key === oldItem.key&&JSON.stringify([product.additions]) === JSON.stringify([oldItem.additions]))
            state.cart.totalPrice = (state.cart.totalPrice-oldItem.total_price) + newItem.total_price
            isExist.quantity = newItem.quantity;
            isExist.additions = newItem.additions;
            isExist.total_price = newItem.total_price;
            isExist.more_details = newItem.more_details;
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeItem (state, action) {
            let newItem = action.payload
            // let isExist = state.cart.dishes
            state.cart.totalPrice = state.cart.totalPrice-newItem.total_price
            state.cart.qnt = state.cart.qnt-newItem.quantity;
            //eslint-disable-next-line
            state.cart.dishes = state.cart.dishes.filter(prod => {
                if(prod.key === newItem.key) {
                    if (prod.price.type !== newItem.price.type) { 
                        return prod;
                    }
                }else {
                    return prod;
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        logout (state) {
            state.cart.qnt = 0
            state.cart.totalPrice = 0
            state.cart.dishes = []
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer