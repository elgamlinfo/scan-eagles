import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './order.scss'
import { useSelector,useDispatch } from 'react-redux'
import { orderActions } from '../../Store/OrderSlice'
const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const mainData = useSelector(state => state.mainData.data);
    const order = useSelector(state => state.order);
    useEffect(() => {
        if(!order.order) {
            navigate('/qr-menu')
        }
    }, [order,navigate])
    return (
        <>
            {mainData && order ? <div className='order__container'>
                <div className='order'>
                    <div className='order__head'>
                        <img src={mainData.logo_dark} alt=""/>
                    </div>
                    <div className='order__info'>
                        <p>Order #: <span>{order.order.refnumber}</span></p>
                        <p>{order.order.date}</p>
                    </div>

                    <div className='order__list'>
                        {order.order.dishes.map(dish => {
                            if(dish.additions.length  !==  0) {
                                return (
                                    <div className='order__items' key={dish.key}>
                                        <div className='order__item'>
                                            <p>{dish.quantity} X {dish.title}</p>
                                            <p className='price'>{dish.price} {mainData.currency}</p>
                                        </div>
                                        {dish.additions.map((add) => {
                                            return (
                                                <div className='order__add' key={add.key}>
                                                    <p>{add.title}</p>
                                                    <p className='price'>{add.price} {mainData.currency}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            }
                            return (
                                <div className='order__items' key={dish.key}>
                                    <div className='order__item'>
                                        <p>{dish.quantity} X {dish.title}</p>
                                        <p className='price'>{dish.price} {mainData.currency}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className='total__tax'>
                        <p>Total before Tax</p>
                        <p className='price'>{order.order.totalPrice} {mainData.currency}</p>
                    </div>

                    <div className='order__tax'>
                        <div className='tax'>
                            <p>Tax</p>
                            <p>{mainData.tax}%</p>
                        </div>
                        <div className='tax'>
                            <p>Employee Tax</p>
                            <p>{mainData.employee_tax}%</p>
                        </div>
                        <div className='total_with_tax'>
                            <p>Total Price</p>
                            <p >{order.order.totalPrice+(order.order.totalPrice*((mainData.tax/100) + (mainData.employee_tax/100)))} {mainData.currency}</p>
                        </div>
                    </div>

                    <div className='user__info'>
                        <div className='info'>
                            <p>Full Name</p>
                            <p>{order.order.fullname}</p>
                        </div>
                        <div className='info'>
                            <p>Mobile Number</p>
                            <p>{order.order.mobile}</p>
                        </div>
                        {order.order.address?<div className='info'>
                            <p>Address</p>
                            <p>{order.order.address}</p>
                        </div>:null}
                    </div>
                    <div className='order__foot'>
                        <p>Your  order is recieved</p>
                        <p>Thanks for order from Scan Smile</p>
                    </div>
                </div>
                <div className='btn_group'>
                    {/*eslint-disable-next-line*/}
                    <button className='back' onClick={() => (dispatch(orderActions.logout()), navigate('/qr-menu'))}>back to menu</button>
                    {/*eslint-disable-next-line*/}
                    <button className='track' onClick={() => (dispatch(orderActions.logout()), navigate('/trackorder'))}>Go to Tracking Order</button>
                </div>
            </div>:null}
        </>
    )
}

export default Order
