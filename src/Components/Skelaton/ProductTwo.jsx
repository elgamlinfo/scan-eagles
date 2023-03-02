import React from 'react'
import './products.scss'
const ProductTwo = (props) => {
    return (
        <>
            <div className='prod__one__Scelaton two'>
                <div className='prod__shape two'></div>
            </div>
            {!props.notitle?<div className='title__sec two'></div>:null}
        </>
    )
}

export default ProductTwo
