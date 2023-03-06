import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './product.scss'
const TempThreeProdTwo = (props) => {
    const categ = props.categ
    const mainData = useSelector(state => state.mainData.data)
    let navigate = useNavigate()
    function clickHandler (e) {
        e.preventDefault()
        if(categ.has_sub_categories) {
            navigate(`/category/${categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }else if(categ.price) {
            navigate(`/dish/${categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }
        else {
            navigate(`/dishes/${categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }
    }
    return (
        <Link to={'*'} onClick={(e) => clickHandler(e)}>
            <div className='three__prod__two'>
                {categ.price?<span className='price_dish'>{categ.price} {mainData.currency}</span>:null}
                <img src={categ.image} alt="" />
                <div className='title'>
                    <p>{categ.title}</p>
                </div>
            </div>
        </Link>
    );
};

export default TempThreeProdTwo;
