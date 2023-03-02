import React,{useEffect, useState, useRef} from 'react'
import IntlTelInput from 'react-intl-tel-input';
import './reservation.scss'
import 'react-intl-tel-input/dist/main.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CodeData from '../../CodeData';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const ReservationForm = () => {
    const lang = Cookies.get('lang')
    const navigate = useNavigate();
    const mainData = useSelector(state => state.mainData.data)
    const [data, setData] = useState(null);
    const [translation, setTranslation] = useState(null);
    const [loading, setLoading] = useState(false)
    const [barnchid, setBranchid] = useState('')
    const [username, setUserName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [hourfrom, setHourFrom] = useState('')
    const [minfrom, setMinFrom] = useState('')
    const [morningtime, setMorningTime] = useState('')
    const [smokingtype, setsmokingtype] = useState('')
    const [place, setPlace] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [error, setFormError] = useState({});
    const placeRef = useRef();
    const numberRef = useRef();
    const usenameRef = useRef();
    //const morningRef = useRef();
    const mobileRef = useRef();
    //const hourRef = useRef();
    const minRef = useRef();
    const dateRef = useRef();
    function numberChange(status, number, code) {
        setMobile(number)
    }
    
    useEffect(() =>{
        if(mainData) {
            axios(`${process.env.REACT_APP_API}/get-active-branches/${lang}/${mainData.countryid}`)
            .then(res => {
                setData(res.data.data.branches);
                setTranslation(res.data.data.translation.reservation)
            })
        }
    }, [mainData,lang])

    function clickHandler(e) {
        e.preventDefault()
        setLoading(true)
        let postData = {
            email,
            mobile: mobile.length<= 5?'':mobile,
            fullname: username,
            branch: barnchid,
            datefrom: date,
            hourfrom,
            minfrom,
            morningtime,
            number,
            place,
            smokingtype,
            message
        }

        

        const headers = {
            'Content-Type': 'application/json',
        };
        axios.post(`${process.env.REACT_APP_API}/storereservation/${lang}`, postData,{headers})
        .then(res => {
            if(res.data.error) {
                setLoading(false)
                setFormError(res.data.error)
                if(barnchid === '') {
                    placeRef.current.classList.add('error')
                }
                if(username === '') {
                    usenameRef.current.classList.add('error')
                }
                if(mobile.length <= 5) {
                    mobileRef.current.classList.add('error')
                }
                if(number === '') {
                    numberRef.current.classList.add('error')
                }
                if(date === '') {
                    dateRef.current.classList.add('error')
                }
                if(minfrom === '') {
                    minRef.current.classList.add('error')
                }
                return;
            }
            setLoading(false)
            console.log(res.data);
            return navigate('/qr-menu?lang=en')
        })
    }

    return (
        <>{translation?<div className='reservation'>
            <form className='reservation__from'>
                <div ref={placeRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                    <label htmlFor='Branch'>{translation.branch}</label>
                    <select id='Branch' value={barnchid} onChange={(e) => setBranchid(e.target.value)}>
                        <option value={""} disabled>{translation.select}</option>
                        {data?data.map(d => <option key={d.key} value={d.key}>{d.location}</option>):null}
                    </select>
                    <span className='error__message'>{error.mobile?error.branch[0].substr(error.branch[0].indexOf(" ") + 1):''}</span>
                </div>
                <div ref={usenameRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                    <label htmlFor='fullname'>{translation.yourname}</label>
                    <input 
                        type="text" 
                        id="fillname" 
                        placeholder={translation.name_ex}
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <span className='error__message'>{error.mobile?error.fullname[0].substr(error.fullname[0].indexOf(" ") + 1):''}</span>
                </div>
                <div ref={mobileRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                    <label htmlFor=''>{translation.mobile}</label>
                    <IntlTelInput
                        preferredCountries={['tw']}
                        placeholder={translation.mobile_ex}
                        defaultValue={mainData?CodeData[0][mainData.countrycode].code:''}
                        onPhoneNumberChange={(status, number, code) => numberChange(status, number, code.dialCode)}
                    />
                    <span className='error__message'>{error.mobile?error.mobile[0].substr(error.mobile[0].indexOf(" ") + 1):''}</span>
                </div>
                <div className={`input__group ${lang === "ar"?"rtl":''}`}>
                    <label htmlFor='email'>{translation.youremail}</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder='example@ex.ex'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div ref={dateRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                    <label htmlFor='Address'>{translation.date}</label>
                    <input 
                        type="date" 
                        id="date" 
                        placeholder='MM/DD/YYYY'
                        value={date}
                        onChange={e => setDate(e.target.value)}    
                    />
                    <span className='error__message'>{error.mobile?error.datefrom[0].substr(error.datefrom[0].indexOf(" ") + 1):''}</span>
                </div>
                <div ref={minRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                    <label htmlFor='Address'>{translation.date_from}</label>
                    <div className='time__wrap'>
                        <select value={hourfrom} onChange={e => setHourFrom(e.target.value)}>
                            <option  value="" disabled>{translation.select}</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select value={minfrom} onChange={e => setMinFrom(e.target.value)}>
                            <option   value="" disabled>{translation.select}</option>
                            <option value="00">00</option>
                            <option value="30">30</option>
                        </select>
                        <select value={morningtime} onChange={e => setMorningTime(e.target.value)}>
                            <option   value="" disabled>{translation.select}</option>
                            <option value="12">AM</option>
                            <option value="24">PM</option>
                        </select>
                    </div>
                </div>
                <div ref={numberRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                    <label htmlFor='numberofpeople'>{translation.numberofpeople}</label>
                    <input 
                        type="text" 
                        id="numberofpeople" 
                        placeholder={translation.numberofpeople}
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <span className='error__message'>{error.mobile?error.number[0].substr(error.number[0].indexOf(" ") + 1):''}</span>
                </div>
                <div className="input__row">
                    <div className={`input__group ${lang === "ar"?"rtl":''}`}>
                        <label htmlFor='Branch'>{translation.tableplace}</label>
                        <select id='Branch' value={place} onChange={e => setPlace(e.target.value)}>
                            <option value="" disabled>{translation.select}</option>
                            <option value="1">indoor</option>
                            <option value="0">outdoor</option>
                        </select>
                    </div>
                    <div className={`input__group ${lang === "ar"?"rtl":''}`}>
                        <label htmlFor='Branch'>{translation.nonsmokingarea}</label>
                        <select value={smokingtype} onChange={e => setsmokingtype(e.target.value)}>
                            <option value="" disabled>{translation.select}</option>
                            <option value="1">smoking</option>
                            <option value="0">no smoking</option>
                        </select>
                    </div>
                </div>
                <div className={`input__group ${lang === "ar"?"rtl":''}`}>
                    <label htmlFor='specialorder'>{translation.specialordertitle}</label>
                    <textarea 
                        id="specialorder" 
                        placeholder={translation.specialordermessage}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button className='send' style={{fontFamily: 'cairo'}} onClick={e => clickHandler(e)}>{loading?<ReactLoading type={"spin"} color={'#ffffff'} height={30} width={30} />:translation.send}</button>
            </form>
        </div>:null}
        </>
    )
}

export default ReservationForm
