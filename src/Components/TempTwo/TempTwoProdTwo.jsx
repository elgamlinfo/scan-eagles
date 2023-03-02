import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Imgix from "react-imgix";
import './product.scss'
import { useSelector } from 'react-redux';

const TempTwoProdTwo = (props) => {
    let categ = props.categ
    const navigate = useNavigate()
    const mainData = useSelector(state => state.mainData.data)
    function clickHandler (e) {
        e.preventDefault()
        if(categ.has_sub_categories) {
            navigate(`/category/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }else if(categ.price){
            navigate(`/dish/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }
        else {
            navigate(`/dishes/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }
    }

    return (
        <div className='two__prod__two'>
            <div className='product__card__two'>
                {categ.price?<span className='price'>{categ.price} {mainData.currency}</span>:null}
                <div className='img__two'>
                    <Link to='*' onClick={props.hide?(e) =>{return e.preventDefault()}:(e) =>clickHandler(e)}>
                        <Imgix src={categ.image} alt='alt' sizes='100vw' disableQualityByDPR htmlAttributes={{alt:""}}/>
                    </Link>
                </div>
            </div>
            {props.hide?null:<Link className="tit" to={`/${props.link}`}>{categ.title}</Link>}
        </div>
    )
}

export default TempTwoProdTwo
