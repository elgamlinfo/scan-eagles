import React from 'react';
import { Link } from 'react-router-dom';
import './cart-empty.scss'


const CartEmpty = () => {
return( 
        <div className='cart__empty'>
            <div className='image'>
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 150C116.421 150 150 116.421 150 75C150 33.5786 116.421 0 75 0C33.5786 0 0 33.5786 0 75C0 116.421 33.5786 150 75 150Z" fill="url(#paint0_linear_1_753)"/>
                <path d="M120 150H30V53C34.242 52.9952 38.3089 51.308 41.3084 48.3085C44.308 45.3089 45.9952 41.242 46 37H104C103.996 39.1014 104.408 41.1828 105.213 43.1238C106.018 45.0648 107.2 46.8268 108.691 48.308C110.172 49.7991 111.934 50.9816 113.875 51.787C115.817 52.5924 117.898 53.0047 120 53V150Z" fill="white"/>
                <path d="M75 102C88.2548 102 99 91.2548 99 78C99 64.7452 88.2548 54 75 54C61.7452 54 51 64.7452 51 78C51 91.2548 61.7452 102 75 102Z" fill="#3AAA35"/>
                <path d="M83.4853 89.3138L75 80.8286L66.5147 89.3138L63.6863 86.4854L72.1716 78.0001L63.6863 69.5148L66.5147 66.6864L75 75.1717L83.4853 66.6864L86.3137 69.5148L77.8284 78.0001L86.3137 86.4854L83.4853 89.3138Z" fill="white"/>
                <path d="M88 108H62C60.3431 108 59 109.343 59 111C59 112.657 60.3431 114 62 114H88C89.6569 114 91 112.657 91 111C91 109.343 89.6569 108 88 108Z" fill="#DFEAFB"/>
                <path d="M97 120H53C51.3431 120 50 121.343 50 123C50 124.657 51.3431 126 53 126H97C98.6569 126 100 124.657 100 123C100 121.343 98.6569 120 97 120Z" fill="#DFEAFB"/>
                <defs>
                <linearGradient id="paint0_linear_1_753" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3AAA35" stopOpacity="0.73"/>
                <stop offset="1" stopColor="#DAE7FF"/>
                </linearGradient>
                </defs>
                </svg>

                <h3>Your Order Is Empty</h3>
                <Link to='/qr-menu?lang=en'>continue Ordering</Link>
            </div>
        </div>
    );
};

export default CartEmpty;
