import React,{useState, useEffect, useRef} from 'react'
import IntlTelInput from 'react-intl-tel-input';
import './cart-form.scss'
import 'react-intl-tel-input/dist/main.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {orderActions} from '../../Store/OrderSlice'
import {cartActions} from '../../Store/cartSlice'
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import CodeData from '../../CodeData';
import Cookies from 'js-cookie';


const CartForm = () => {
    const lang = Cookies.get('lang')
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart.cart)
    const mainData = useSelector(state => state.mainData.data)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null);
    const [translation, setTranslation] = useState(null);
    const [place, setPlace] = useState('select');
    const [branch_id, setBranchId] = useState('select');
    const [payment, setPayment] = useState('select');
    const [tablenumber, setTableNumber] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddres] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setFormError] = useState({});
    const palceRef = useRef();
    const branchRef = useRef();
    const usenameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const paymentRef = useRef();
    const addressRef = useRef();
    const tableRef = useRef();

    useEffect(() =>{
        if(mainData) {
            axios(`${process.env.REACT_APP_API}/get-active-branches/${lang}/${mainData.countryid}`)
            .then(res => {
                setData(res.data.data.branches);
                setTranslation(res.data.data.translation.cart)
            })
        }
    }, [mainData,lang])

    function numberChange(status, number, code) {
        setMobile(number)
    }
    function checkOutHandler () {
        setLoading(true)
        let dishes = cart.dishes.map(dish => {
            return {
                dishid: dish.key,
                price: dish.total_price,
                quantity: dish.quantity,
                itemprice: dish.price,
                additions: dish.additions.length !==0?dish.additions.map(add => {return {"id": add.key}}):0,
                dishmessage: dish.more_details
            }
        });
        let formData = {}



        if(place ===  "1") {
            formData = {
                place: parseInt(place),
                branchid: parseInt(branch_id),
                tablenumber: parseInt(tablenumber),
                username,
                mobile: mobile.length <= 5?'':mobile,
            }
        }else {
            formData = {
                place: parseInt(place),
                branchid: parseInt(branch_id),
                method: parseInt(payment),
                username,
                email,
                address,
                mobile: mobile.length <= 5?'':mobile,
            }
        }
        let postData = {
            dishes,
            totalprice: cart.totalPrice,
            tax:mainData.tax,
            employeetax:mainData.employee_tax?mainData.employee_tax:0,
            country: mainData.countryid,
            ...formData
        }
        const headers = {
            'Content-Type': 'application/json',
        };
        axios.post(`${process.env.REACT_APP_API}/storeorder/${lang}`, postData,{headers})
        .then(res => {
            if(res.data.error) {
                setLoading(false)
                setFormError(res.data.error)
                if(place === "select") {
                    palceRef.current.classList.add('error')
                } 
                if(branch_id === "select") {
                    branchRef.current.classList.add('error')
                } 
                if(username === "") {
                    usenameRef.current.classList.add('error')
                } 
                if(email === "") {
                    place!=="1"&&place!=="1"&&emailRef.current.classList.add('error')
                } 
                if(mobile.length <= 5) {
                    mobileRef.current.classList.add('error')
                } 
                if(payment === "select") {
                    place!=="1"&&paymentRef.current.classList.add('error')
                } 
                if(address === "") {
                    place!=="1"&&addressRef.current.classList.add('error')
                } 
                if(tablenumber === "") {
                    place==="1"&&tableRef.current.classList.add('error')
                } 
                return;
            }
            dispatch(orderActions.setOrder({
                ...cart,
                refnumber: res.data.data.refnumber,
                date: res.data.data.date,
                fullname: username,
                mobile: mobile,
                address: address !== ''? address:null
            }))
            dispatch(cartActions.logout())
            navigate('/order')
            setLoading(false)
        }).catch(res => {
            
        })
    }
    return (
        <>
           {translation? <div className='cart__form'>
                <h2>{translation.contactform}</h2>
                <form className='contact__from'>
                    <div className={`input__group ${lang === "ar"?"rtl":''}`} ref={palceRef} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='placeorder'>{translation.yourplace}</label>
                        <select  id='place' name='place' value={place}  onChange={(e) => setPlace(e.target.value)}>
                            <option value={"select"} disabled>{translation.select}</option>
                            <option value={1}>dining</option>
                            <option value={2}>pikup</option>
                            <option value={3}>delivery</option>
                        </select>
                        <span className='error__message'>{error.place?error.place[0].substr(error.place[0].indexOf(" ") + 1):''}</span>
                    </div>
                    <div ref={branchRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='Branch'>{translation.branch}</label>
                        <select id='Branch' name='branch_id' value={branch_id} onChange={(e) => setBranchId(e.target.value)}>
                            <option value={"select"} disabled>{translation.select}</option>
                            {data?data.map(d => <option key={d.key} value={d.key}>{d.location}</option>):null}
                        </select>
                        <span className='error__message'>{error.branchid?error.branchid[0].substr(error.branchid[0].indexOf(" ") + 1):''}</span>
                    </div>
                    {place==="1"?<div ref={tableRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='table'>{translation.tablenumber}</label>
                        <input 
                            type="text" 
                            name="tablenumber" 
                            id="table" 
                            placeholder='Table Number'
                            value={tablenumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                        />
                        <span className='error__message'>{error.tablenumber?error.tablenumber[0].substr(error.tablenumber[0].indexOf(" ") + 1):''}</span>
                    </div>:null}
                    <div className={`input__group ${lang === "ar"?"rtl":''}`} ref={usenameRef} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='fullname'>{translation.yourname}</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            placeholder={translation.name_ex} 
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <span className='error__message'>{error.username?error.username[0].substr(error.username[0].indexOf(" ") + 1):''}</span>
                    </div>

                    {place!=="1"?<div ref={emailRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='email'>{translation.youremail}</label>
                        <input 
                            type="text" 
                            id="email" 
                            placeholder='example@ex.ex'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className='error__message'>{error.email?error.email[0].substr(error.email[0].indexOf(" ") + 1):''}</span>
                    </div>:null}
                    
                    <div ref={mobileRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor=''>{translation.mobile}</label>
                        <IntlTelInput
                            preferredCountries={['tw']}
                            type="tel"
                            placeholder={translation.mobile_ex}
                            defaultValue={mainData?CodeData[0][mainData.countrycode].code:''}
                            onPhoneNumberChange={(status, number, code) => numberChange(status, number, code.dialCode)}
                        />
                        <span className='error__message'>{error.mobile?error.mobile[0].substr(error.mobile[0].indexOf(" ") + 1):''}</span>
                    </div>
                    {place!=="1"?<><div ref={paymentRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='Payment'>{translation.yourmethod}</label>
                        <select id='Payment' value={payment} onChange={(e) => setPayment(e.target.value)}>
                            <option value='select' disabled>{translation.select}</option>
                            <option value='1'>Cash on Delivery</option>
                            <option value="2">Credit Card</option>
                        </select>
                        <span className='error__message'>{error.method?error.method[0].substr(error.method[0].indexOf(" ") + 1):''}</span>
                    </div>
                    <div ref={addressRef} className={`input__group ${lang === "ar"?"rtl":''}`} onClick={e => e.currentTarget.classList.remove('error')}>
                        <label htmlFor='Address'>{translation.youraddress}</label>
                        <input 
                            type="text" 
                            id="Address" 
                            placeholder={translation.youraddress}
                            value={address}
                            onChange={(e) => setAddres(e.target.value)}
                        />
                        <span className='error__message'>{error.address?error.address[0].substr(error.address[0].indexOf(" ") + 1):''}</span>
                    </div></>:null}
                </form>
                <div className='check__out'>
                    <button type='submit'  style={{textTransform:"capitalise"}} onClick={() => checkOutHandler()}><span>{loading?<ReactLoading type={"spin"} color={'#ffffff'} height={30} width={30} />:translation.checkout}</span><span>{cart.totalPrice} {mainData?mainData.currency:null}</span></button>
                </div>
            </div>:null}
        </>
    )
}

export default CartForm
