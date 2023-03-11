import React from 'react'
// import { useNavigate } from 'react-router-dom'
import CartForm from '../../Components/Cart/CartForm'
import CartProduct from '../../Components/Cart/CartProduct'
import CartEmpty from '../../Components/Cart/CartEmpty'
import Navbar from '../../Components/Navbar/Navbar'
import './cart.scss'
import { useSelector } from "react-redux";
import ContactBtn from '../../Components/ContactBtn/ContactBtn'

const Cart = () => {
    // const navigate = useNavigate();
    const cart = useSelector(state => state.cart.cart)
    const mainData = useSelector(state => state.mainData.data)
    return (
        <>
            <Navbar title='my cart' home={true}/>
            {cart && cart.dishes.length !== 0?<><div className='wrapper'>
                {cart.dishes&&mainData?cart.dishes.map(dish =>  <CartProduct currency={mainData.currency} key={dish.key*Math.random(0,500)} dish={dish}/>):null}
            </div>
            <CartForm /></>:<CartEmpty />}
            <ContactBtn />
            
        </>
    )
}

export default Cart

