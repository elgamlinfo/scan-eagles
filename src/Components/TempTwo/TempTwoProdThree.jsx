import React from 'react'
import Imgix from "react-imgix";
import './product.scss'

const TempTwoProdThree = (props) => {
    let categ = props.categ
    
    return (
            <div className='product__card__three'>
                <div className='img__two'>
                        <Imgix src={categ.image} alt='alt' sizes='100vw' disableQualityByDPR htmlAttributes={{alt:""}}/>
                </div>
            </div>
    )
}

export default TempTwoProdThree
