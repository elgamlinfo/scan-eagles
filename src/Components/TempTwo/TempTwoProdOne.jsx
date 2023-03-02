import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './product.scss'
import Imgix from "react-imgix";

const TempTwoProdOne = (props) => {
    const mainData = useSelector(state => state.mainData.data)
    return (
        <>
            <div className='three__prod__three'>
                <div className='img'>
                    <span className='prod__price'>{props.dish.price} {mainData.currency}</span>
                    <Link to={`/dish/${props.dish.title.split(' ').join('').toLowerCase()}?key=${props.dish.key}`}>
                        <Imgix src={props.dish.image} alt='alt' sizes='100vw' disableQualityByDPR htmlAttributes={{alt:""}}/>
                    </Link>
                </div>
            </div>
            <Link className='prod__title' to={`/dish/${props.dish.title.split(' ').join('').toLowerCase()}?key=${props.dish.key}`}>{props.dish.title}</Link>
        </>
    );
};

export default TempTwoProdOne;
