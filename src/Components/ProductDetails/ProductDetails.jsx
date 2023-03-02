import React,{ useState } from "react";
import "./product-details.scss";
import MainSlider from "../MainSlider/MainSlider";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const ProductDetails = (props) => {
    const lang = Cookies.get('lang');
    const mainData = useSelector(state => state.mainData.data)
    const qnt = useSelector(state => state.cart.cart.qnt)
    const [count, setCount] = useState(props.edit?props.dish.quantity:1);
    const [price, setPrice] = useState(props.edit?props.dish.total_price:props.dish.price);
    const [addtion_price, setAddtionprice] = useState(props.edit?props.dish.addtion_price:0);
    const [add, setAdd] = useState(props.edit?props.dish.additions:[]);
    const navigate  = useNavigate();
    const [moreDatils, setMoreDetails] = useState(props.edit?props.dish.more_details:'');
    const dish  = {
        ...props.dish,
        quantity: count,
        total_price: price,
        additions: add,
        more_details: moreDatils,
        addtion_price,
    }

    function countHandler(type) {
        if (type === "inc") {
            setPrice((count+1)*(props.dish.price+addtion_price))
            setCount((state) => state + 1);
            return;
        }
        if (count === 1) {
            return setCount((state) => state);
        }
        setPrice((count-1)*(props.dish.price+addtion_price))
        setCount((state) => state - 1);
    }

    function additionsChange (e) {
        //eslint-disable-next-line
        let addition = props.additions.find(add => add.key == e.target.id)
        if(e.target.checked) {
            setPrice(price => price+addition.price*count)
            setAddtionprice(price => price+addition.price)
            setAdd(add => add = add.concat(addition))
        }else {
            setPrice(price => price-addition.price*count)
            setAddtionprice(price => price-addition.price)
            //eslint-disable-next-line
            setAdd(add => add.filter(add => add.key != e.target.id))
        }
    }

    return (
        <div className={`prod__details ${lang === "ar"?'rtl':''}`}>
            <div className="prod__info">
                <h2>{props.dish.title}</h2>
                <p className="prod__price">{props.translation.price_title}: {props.dish.price} {mainData.currency}</p>
                <p className="details">
                    {props.dish.description}
                </p>
            </div>
            
            {
                props.additions.length !==0  && <><div className="addtional">
                <h2>{props.translation.addtion_title}</h2>
                {props.additions.map(addition => {
                return (
                    <div className="check__box" key={addition.key}>
                        <input type="checkbox" name="addtional"  value={addition.title} id={addition.key} onChange={(e) => additionsChange(e)} defaultChecked={props.edit?true:null}/>
                        <span>
                            {addition.title}
                        </span>
                        <span>
                        {addition.price} {mainData.currency}
                        </span>
                    </div>
                )
            })}
            </div></>
            }

            {mainData && mainData.ordertoggle !== 0?<div className="prod__qnt">
                <h2>{props.translation.quantity_title}</h2>
                <div className="qnt_count">
                    <button onClick={() => countHandler("dec")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-minus align-middle me-2"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <div className="count">{count}</div>
                    <button onClick={() => countHandler("inc")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus align-middle me-2"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>:null}

            {mainData && mainData.ordertoggle !== 0?<div className="more__details">
                <h2>{props.translation.moredetails_title}</h2>
                <textarea placeholder={`${props.translation.writecomment_title}...`} value={moreDatils} onChange={e => setMoreDetails(e.target.value)} ></textarea>
            </div>:null}

            {!props.edit?<div className="related__dish">
                <h2>{props.translation.relateddishes_title}</h2>
                <MainSlider data={props.data}/>
            </div>:null}

            {mainData && mainData.ordertoggle !== 0?<div className="cart">
                {!props.edit?<button className="add__cart" onClick={() => props.addToCartHandler(dish)}>
                    <span>{props.translation.price_title}</span>
                    <span>{price} {mainData.currency}</span>
                    {/*eslint-disable-next-line*/}
                </button>:<button className="add__cart" onClick={() => (props.editToCartHandler({old:props.dish,new: dish}), navigate('/cart'))}>
                    <span>{props.translation.save_title}</span>
                    <span>{price} {mainData.currency}</span>
                </button>}
                <button className="go__cart" onClick={() => navigate('/cart')}>
                    <div className="count">{qnt}</div>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.30469 4L4.66406 11.043H6.80469L8.69531 6H23.3086L25.1992 11.043H27.332L24.6914 4H7.30469ZM2 12V18H3.25781L6.25781 28H25.7461L28.7461 18H30V12H2ZM4 14H28V16H27.2539L24.2539 26H7.74219L4.74219 16H4V14ZM11 17V24H13V17H11ZM15 17V24H17V17H15ZM19 17V24H21V17H19Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>:null}
        </div>
    );
};

export default ProductDetails;
