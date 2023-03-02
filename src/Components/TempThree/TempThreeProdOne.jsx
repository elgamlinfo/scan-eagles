import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './product.scss'


const TempThreeProdOne = (props) => {
    const dish = props.dish;
    const mainData = useSelector(state => state.mainData.data)
    return (
        <Link to={`/dish/${dish.title.split(' ').join('').toLowerCase()}?key=${dish.key}`}>
            <div className='three__prod__one'>
                <div className='image__box__three'>
                    <span className='price'>{dish.price} {mainData.currency}</span>
                    <img src={dish.image} alt=""/>
                </div>
                <div className='prod__title__three'>
                    <p>{dish.title}</p>
                </div>
            </div>
        </Link>
    )
};

export default TempThreeProdOne;
