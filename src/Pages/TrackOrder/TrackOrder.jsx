import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import TrackInfo from '../../Components/TrackOrder/TrackInfo'
import TrackOrderForm from '../../Components/TrackOrder/TrackOrderForm'
import axios from 'axios'


const TrackOrder = () => {
    const [order, setOrder] = useState(null)

    function getOrder(id) {
        axios.get(`${process.env.REACT_APP_API}/track-order/${id}`)
        .then(res => {
            setOrder(res.data.data);
        })
    }

    return (
        <>
            <Navbar title='traking order' home={true}/>
            <TrackOrderForm getOrder={getOrder}/>
            <TrackInfo order={order}/>
            <Footer />
        </>
    )
}

export default TrackOrder
