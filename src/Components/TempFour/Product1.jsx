import React from 'react'
import './product.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Product1 = (props) => {
    const mainData = useSelector(state => state.mainData.data)
    return (
        <div className='temp4__prod__1'>
            <Link to={`/dish/${props.dish.title.split(' ').join('').toLowerCase()}?key=${props.dish.key}`}><img src={props.dish.image} alt=""/></Link>
            <div className='temp4__prod__info'>
                <Link to={`/dish/${props.dish.title.split(' ').join('').toLowerCase()}?key=${props.dish.key}`}>{props.dish.title}</Link>
                <p className='price'>{props.dish.price} {mainData.currency}</p>
            </div>
        </div>
    )
}

export default Product1
