import React, {useState} from 'react'
import './track-order-form.scss'

const TrackOrderForm = (props) => {
    const [order, setOrder] = useState('')
    return (
        <div className='track__order__form'>
            <form>
                <label htmlFor='order'>tracking number</label>
                <input 
                    type="text" 
                    name="order" 
                    id="order" 
                    placeholder='enter number'
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                />
            </form>
                <button onClick={() => props.getOrder(order)}>track now</button>
        </div>
    )
}

export default TrackOrderForm
