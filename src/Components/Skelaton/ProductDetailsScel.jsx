import React from 'react'
import { useSelector } from 'react-redux'
import './products.scss'
import ProductTwo from './ProductTwo'
import TempThreeProdTwoS from './TempThree/TempThreeProdTwoS'
const ProductDetailsScel = () => {
    const mainData = useSelector(state => state.mainData.data)
    return (
        <div className='prod_detail'>
            {mainData?
                <>
                    {mainData.temp === "1"?<ProductTwo notitle={true}/>:<TempThreeProdTwoS />}
                </>:
                null
            }
            <div className='detail_titl'></div>
            <div className='detail_titl'></div>
            <div className='detail'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default ProductDetailsScel
