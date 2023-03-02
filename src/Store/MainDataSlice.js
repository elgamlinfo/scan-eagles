import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


const initialState={data:{
    temp: "3",
    systemlang: ["ar", "en"],
    mostsale_title: "Most Selling Dishes",
    best_sale_dishes: [{price: 30, key: 1, image: "https://res.cloudinary.com/elgaml/image/upload/v1677781129/Rectangle_78_xzvyu9.png", title: "Thai Chicken Salad"}],
    currency: "Egp",
    categories_categories:"Categories",
    category: [{
            key: 1, 
            has_sub_categories: false, 
            image: "https://res.cloudinary.com/elgaml/image/upload/v1677781499/Rectangle_78_c2abw6.png", 
            title: "Salads", 
        },{
            key: 2, 
            has_sub_categories: false, 
            image: "https://res.cloudinary.com/elgaml/image/upload/v1677781728/Rectangle_78_wu7ck9.png", 
            title: "Flatbread Pizzas", 
        },{
            key: 3, 
            has_sub_categories: false, 
            image: "https://res.cloudinary.com/elgaml/image/upload/v1677781794/Rectangle_78_mhy7p6.png", 
            title: "Lunch Specials", 
        },{
            key: 4, 
            has_sub_categories: false, 
            image: "https://res.cloudinary.com/elgaml/image/upload/v1677781836/Rectangle_78_x4dxiw.png", 
            title: "Sandwiches", 
        }
    ]
}}

export const getData = createAsyncThunk(
    'mianData/getData',  
    () => {
        return  axios.get(`${process.env.REACT_APP_API}/data`)
        .then(response => {
            return response.data.data
        })
    }   
)

const mainDataSlice = createSlice({
    name: "mainData",
    initialState,
    extraReducers: {
        [getData.fulfilled]: (state, {payload}) => {
            state.data = payload
            sessionStorage.maindata = JSON.stringify(payload)
        },
    },
    reducers: {
        setMainData(state, action) {
            state.data = action.payload
        }
    }
})

export const MainDataActions = mainDataSlice.actions

export default mainDataSlice.reducer