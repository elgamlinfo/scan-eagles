import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './product.scss'
import Cookies from 'js-cookie'


const Product2 = (props) => {
    const lang = Cookies.get('lang')
    const navigate = useNavigate();
    let categ = props.categ
    function clickHandler (e) {
        e.preventDefault()
        if(categ.has_sub_categories) {
            navigate(`/category/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }else {
            navigate(`/dishes/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }
    }

    return (
        <Link to={`*`} onClick={(e) => clickHandler(e)} className='temp4__prod__a__2'>
            <div className={`temp4__prod__2 ${lang === "ar"?"rtl":''}`}>
                <img className='img__box' src={props.categ.image} alt=''/>
                <p>{props.categ.title}</p>
            </div>
        </Link>
    )
}

export default Product2
