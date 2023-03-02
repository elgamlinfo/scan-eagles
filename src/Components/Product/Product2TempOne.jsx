import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import ProdImg from "../../images/product.jpg"
import './product.scss'
import Imgix from "react-imgix";

const Product2TempOne = (props) => {
    let categ = props.categ
    const navigate = useNavigate()

    function clickHandler (e) {
        e.preventDefault()
        if(categ.has_sub_categories) {
            navigate(`/category/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }else {
            navigate(`/dishes/${props.categ.title.split(' ').join('').toLowerCase()}?key=${categ.key}`)
        }
    }

    return (
        <div className='prod__2'>
            <div className='product__card'>
                <div className='img'>
                    <Link to='*' onClick={props.hide?(e) =>{return e.preventDefault()}:(e) =>clickHandler(e)}>
                        <Imgix src={categ.image} alt='alt' sizes='100vw' disableQualityByDPR htmlAttributes={{alt:""}}/>
                    </Link>
                </div>
            </div>
            {props.hide?null:<Link to={`/${props.link}`}>{categ.title}</Link>}
        </div>
    )
}

export default Product2TempOne
