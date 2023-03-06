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
            {props.logo? <button className='toogle__btn' onClick={() => props.activeHandler()} aria-label="bars"> <svg
                            width="25"
                            height="25"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.30469 4L4.66406 11.043H6.80469L8.69531 6H23.3086L25.1992 11.043H27.332L24.6914 4H7.30469ZM2 12V18H3.25781L6.25781 28H25.7461L28.7461 18H30V12H2ZM4 14H28V16H27.2539L24.2539 26H7.74219L4.74219 16H4V14ZM11 17V24H13V17H11ZM15 17V24H17V17H15ZM19 17V24H21V17H19Z"
                                fill="white"
                            />
                        </svg></button>:
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
