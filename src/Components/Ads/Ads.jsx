import React from 'react'
import './ads.scss'


const Ads = (props) => {
    return (
        <div className='ads'>
            <a href={`${props.ads.link}`}>
                <span className='ads__badge'>{props.trans}</span>
                <img src={props.ads.image}   alt='' />
            </a>
        </div>
    )
}

export default Ads
