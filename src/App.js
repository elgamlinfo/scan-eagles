import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Index from "./Pages/Index/Index";
import ShowDish from "./Pages/ShowDish/ShowDish";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Category from "./Pages/Category/Category";
import Dishes from "./Pages/Dishes/Dishes";
import Reservation from './Pages/Reservation/Reservation'
import Splash from './Pages/Splash/Splash'
import { getData } from "./Store/MainDataSlice";
import { useDispatch } from "react-redux";
import { MainDataActions } from "./Store/MainDataSlice";
import { getCart } from "./Store/cartSlice";
import Cookies from "js-cookie"



function App() {
  const lang = Cookies.get('lang');
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])


  useEffect(() => {
    document.body.style.direction = lang === "ar"?"rtl":"ltr"
    let data = sessionStorage.getItem("maindata");
    let cart = localStorage.getItem("cart");
    if(cart) {
      dispatch(getCart())
    }  
    if(!data) {
      return dispatch(getData())
    }
    dispatch(MainDataActions.setMainData(JSON.parse(data)))

  },[dispatch,lang])
  
  return (
      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Splash />}/>
          <Route path='qr-menu' element={<Home />}/>
          <Route  path='dish/:id' element={<ShowDish />}/>
          <Route  path='category/:id' element={<Category />}/>
          <Route  path='dishes/:id' element={<Dishes />}/>
          <Route  path='cart' element={<Cart />}/>
          <Route  path='order' element={<Order />}/>
          <Route  path='trackorder' element={<TrackOrder />}/>
          <Route  path='reservation' element={<Reservation />}/>
        </Route>
      </Routes>
  );
}

export default App;
