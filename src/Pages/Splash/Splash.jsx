import React from 'react'
import './splash.scss'
import Logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const Splash = () => {
    const navigate = useNavigate();
    function ar () {
        Cookies.set("lang", "ar");
        document.body.style.direction = "rtl"
        navigate('/qr-menu')
    }
    function en () {
        Cookies.set("lang", "en");
        navigate('/qr-menu')
    }
    return (
        <div className='splash'>
            <div className="splash__box">
                <img src={Logo} alt=""/>
                <p>Get It... Scan It... Smile</p>
                <div className="splash__btn">
                    <button onClick={() => en()}>english</button>
                    <button onClick={() => ar()}>العربية</button>
                </div>
            </div>
        </div>
    )
}

export default Splash
