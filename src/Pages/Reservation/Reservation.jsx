import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ReservationForm from '../../Components/Reservation/ReservationForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
    const mainData = useSelector(state => state.mainData.data)
    const navigate = useNavigate()
    useEffect(() => {
        if(mainData && mainData.ordertoggle === 0) {
            navigate('/qr-menu')
        }
    },[mainData,navigate])
    return (
        <>
            <Navbar title='reservations' />
                <ReservationForm />
            <Footer margin='200px'/>
        </>
    )
}

export default Reservation
