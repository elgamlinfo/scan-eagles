import React from 'react'
// import { useNavigate } from 'react-router-dom'
import CartForm from '../../Components/Cart/CartForm'
import CartProduct from '../../Components/Cart/CartProduct'
import CartEmpty from '../../Components/Cart/CartEmpty'
import Navbar from '../../Components/Navbar/Navbar'
import './cart.scss'
import { useDispatch, useSelector } from "react-redux";
import ContactBtn from '../../Components/ContactBtn/ContactBtn'
import { cartActions } from '../../Store/cartSlice'
import Popup from '../../Components/Popup/Popup'
import { useState } from 'react'
import WhatsAppBtn from '../../Components/WhatsAppBtn/WhatsAppBtn'
const Cart = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch()
    const [active,setActive] = useState(false)
    const cart = useSelector(state => state.cart.cart)
    const mainData = useSelector(state => state.mainData.data)
    const ConvertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }
    return (
        <>
            <Navbar title='my cart' home={true}/>
            {cart && cart.dishes.length !== 0?<><div className='wrapper'>
                {cart.dishes&&mainData?cart.dishes.map(dish =>  <CartProduct currency={mainData.currency} key={dish.key*Math.random(0,500)} dish={dish}/>):null}
            </div>
            <CartForm />
            <div className='check__out'>
                    <button type='button'  onClick={() => (dispatch(cartActions.logout(),setActive(true)))} style={{textTransform:"capitalise"}} ><span>تأكيد</span><span>{ConvertToArabicNumbers(cart.totalPrice)} {mainData?mainData.currency:null}</span></button>
            </div>
            </>:<CartEmpty />}
            <ContactBtn />
            <WhatsAppBtn />
            <Popup active={active} setActive={setActive}/>
        </>
    )
}

export default Cart

