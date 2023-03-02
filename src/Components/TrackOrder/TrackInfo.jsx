import React from 'react'
import './track-info.scss'
const TrackInfo = (props) => {
    return (
        <div className='track__info'>
            {props.order?<>
                <div className='personal__info'>
                    <h3>personal information</h3>
                    <p>{props.order.username}</p>
                    <p>{props.order.address}</p>
                    <p>{props.order.mobile}</p>
                    <p>nazzaly@gmail.com</p>
                </div>
                <div className='order__status'>
                    <h3>Status of your order</h3>
                    <div className='status'>
                        <span className={`circle ${props.order.status === "1" || props.order.status === "2" || props.order.status === "3" || props.order.status === "4"?'active':''}`}></span>
                        <span>confirm order</span>
                    </div>
                    <div className='status'>
                        <span className={`circle ${props.order.status === "2" || props.order.status === "3" || props.order.status === "4"?'active':''}`}></span>
                        <span>start cooking</span>
                    </div>
                    <div className='status'>
                        <span className={`circle ${props.order.status === "3" || props.order.status === "4"?'active':''}`}></span>
                        <span>cooking completed</span>
                    </div>
                    <div className='status'>
                        <span className={`circle ${props.order.status === "4"?'active':''}`}></span>
                        <span>on the way</span>
                    </div>
                </div>
            </>:null}
        </div>
    )
}


export default TrackInfo
