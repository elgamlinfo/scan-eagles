import React, {useState} from 'react'
import Cookies from 'js-cookie'
// import logo from '../../images/logo.png'
import lang from "../../images/lang.svg"
import bars  from "../../images/bars.png"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import './navbar.scss'
import Img from '../../images/logo.png'

const Navbar = (props) => {
    const langg = Cookies.get('lang')
    const mainData = useSelector(state => state.mainData.data)
    const [active, setActive] = useState(false)
    const navigate = useNavigate();

    
    return (
        <div className='home__navbar'>
            <div className='toogle__menu__btn' dir='auto'>
            {props.logo? <button className='toogle__btn' onClick={() => props.activeHandler()} aria-label="bars"><img src={bars} alt=""/></button>:
                !props.logo && langg!=="ar"?<button className='toogle__btn' onClick={() => props.home?navigate('/qr-menu'):navigate(-1)} aria-label="back"><FontAwesomeIcon icon={faArrowLeft} aria-label="left btn"/></button>:
                !props.logo &&langg==="ar"?<button className='toogle__btn' onClick={() => props.home?navigate('/qr-menu'):navigate(-1)} aria-label="back"><FontAwesomeIcon icon={faArrowRight} aria-label="left btn"/></button>:null
            }
            </div>
            <div className='logo'>
            <img src={Img} alt=""/>
            </div>
            {!props.nolang?<div className='lang__btn'>
                <button onClick={() => setActive(!active)} aria-label="lang" className='tog'><img src={lang} alt="" /></button>
                <div className={`dropdown__lang ${active?"active":''} ${langg ==="ar"?'rtl':''}`} dir='auto' >
                    {mainData?mainData.systemlang.map((lang) => <button className='langg' onClick={() => (Cookies.set("lang", lang), window.location.reload())} key={lang}>{lang}</button>):null}
                </div>
            </div>:<></>}
        </div>
    )
}

export default Navbar
