import React from 'react';
import { Link } from 'react-router-dom';
import './cart-empty.scss'


const CartEmpty = () => {
return( 
        <div className='cart__empty'>
            <div className='image'>
                <img src='https://restaurant.layouti.com/backEnd/img/emptyorder.png' alt=''/>
                <h3>Your Cart Is Empty</h3>
                <Link to='/qr-menu?lang=en'>continue shopping</Link>
            </div>
        </div>
    );
};

export default CartEmpty;
