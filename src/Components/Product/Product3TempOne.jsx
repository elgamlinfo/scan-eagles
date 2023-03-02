import React from 'react'
import { Link } from 'react-router-dom'
import './product.scss'
import { useSelector } from 'react-redux'
import Imgix from "react-imgix";

const Product3TempOne = (props) => {
    const mainData = useSelector(state => state.mainData.data)

    return (
        <><div className='product__card__three'>
            <div className='img__three'>
                <span className='prod__price__three'>{props.dish.price} {mainData.currency}</span>
                <Link to={`/dish/${props.dish.title.split(' ').join('').toLowerCase()}?key=${props.dish.key}`}>
                    <Imgix src={props.dish.image} alt='alt' sizes='100vw' disableQualityByDPR htmlAttributes={{alt:""}}/>
                </Link>
            </div>
        </div>
        <Link to={`/dish/${props.dish.title.split(' ').join('').toLowerCase()}?key=${props.dish.key}`} className='title'>{props.dish.title}</Link>
        </>
    )
}

export default Product3TempOne
