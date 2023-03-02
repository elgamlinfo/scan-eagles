import React from "react";
import "./cart-product.scss";
import { cartActions } from "../../Store/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const CartProduct = (props) => {
    const lang = Cookies.get("lang")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function countHandler(type) {
        if (type === "inc") {
            dispatch(
                cartActions.addOneItem({
                    ...props.dish,
                    price: props.dish.price+props.dish.addtion_price,
                })
            );
            return;
        }
        if (props.dish.quantity === 1) {
            dispatch(cartActions.removeItem(props.dish));
            return;
        }
        dispatch(
            cartActions.removeOneItem({
                ...props.dish,
                price: props.dish.price + props.dish.addtion_price,
                quantity: 1,
            })
        );
    }

    return (
        <div className="cart__product">
            <div className="img">
                <img src={props.dish.image} alt="" />
            </div>
            <div className={`prod__info ${lang === "ar"?"rtl":''}`}>
                <div className={`prod__title ${lang === "ar"?"rtl":''}`} >{props.dish.title}</div>
                <p className="prod__price">
                    {props.dish.total_price} {props.currency}
                </p>
                <div className="prod__action">
                    
                    <div className="prod__edit">
                        <button
                            className="del__btn"
                            onClick={() =>
                                dispatch(cartActions.removeItem(props.dish))
                            }
                        >
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 16 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.2826 1.82528C11.0436 1.12186 10.4229 0.666626 9.7199 0.666626H6.27993L6.14916 0.671902C5.45767 0.72787 4.86759 1.2241 4.68587 1.92106L4.47953 2.9734L4.45535 3.06603C4.35654 3.36602 4.0803 3.57423 3.76476 3.57423L3.76476 3.57423H1.10949L1.02679 3.57994C0.729294 3.62133 0.5 3.88283 0.5 4.19926C0.5 4.54445 0.772879 4.82428 1.10949 4.82428L3.76476 4.82428H12.2351L14.8905 4.82428L14.9732 4.81857C15.2707 4.77719 15.5 4.51568 15.5 4.19926C15.5 3.85406 15.2271 3.57423 14.8905 3.57423H12.2358C12.2356 3.57423 12.2353 3.57423 12.2351 3.57423L12.1417 3.5681C11.8354 3.52762 11.5822 3.29056 11.5203 2.97315L11.3228 1.96003L11.2826 1.82528ZM10.4286 3.57423C10.4009 3.50367 10.3769 3.43097 10.3569 3.35636L10.325 3.21836L10.1364 2.24396C10.0923 2.07489 9.95612 1.95111 9.79185 1.92281L9.7199 1.91667H6.27993C6.10892 1.91667 5.95691 2.01931 5.89377 2.14831L5.87235 2.20499L5.67483 3.21861C5.65073 3.34203 5.61583 3.46089 5.57126 3.57423H10.4286ZM13.8153 6.26677C14.1229 6.2922 14.3587 6.54759 14.375 6.855L14.3671 7.02641L14.105 10.2358L13.8301 13.3678C13.7719 13.993 13.7198 14.5204 13.6749 14.9355C13.5187 16.3823 12.5796 17.2769 11.1638 17.3034C8.95781 17.3441 6.83731 17.3437 4.7781 17.2992C3.40331 17.2703 2.47805 16.366 2.32462 14.9414L2.21858 13.8918L2.03328 11.8558L1.84347 9.62168L1.62643 6.93986C1.59946 6.59578 1.84959 6.29442 2.18512 6.26676C2.49269 6.2414 2.76525 6.45483 2.82932 6.7556L2.85426 7.0014L3.05805 9.51556L3.28057 12.1215C3.38038 13.2496 3.46695 14.1626 3.53622 14.804C3.62365 15.6158 4.05115 16.0336 4.80343 16.0494C6.84654 16.0936 8.95123 16.094 11.1417 16.0535C11.9398 16.0386 12.374 15.6249 12.4633 14.7978L12.5689 13.7538C12.5998 13.432 12.6328 13.0769 12.6678 12.691L12.8905 10.1281L13.1588 6.83954C13.1836 6.52414 13.4327 6.28238 13.7325 6.26564L13.8153 6.26677Z"
                                    fill="#D73737"
                                />
                            </svg>
                        </button>
                        <button
                            className="edit__btn"
                            onClick={() => navigate(`/dish/edit/?key=${props.dish.key}&total=${props.dish.total_price}`)}
                        >
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.96867 13.9157L13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157ZM18.5381 6.59831L17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.8382 6.06697L17.7862 9.93612L18.5381 9.19909C19.2705 8.48112 19.2705 7.31628 18.5381 6.59831ZM4.89998 14.8287L12.9069 6.97989L16.8549 10.849L8.8093 18.7357L8.70228 18.8317C8.4067 19.0745 8.03222 19.2088 7.64282 19.2088L4.33345 19.2084L4.41707 15.9305C4.42814 15.5169 4.60126 15.1215 4.89998 14.8287ZM21 19.8545C21 19.498 20.7052 19.2089 20.3415 19.2089H13.471L13.3816 19.2148C13.0602 19.2576 12.8125 19.5277 12.8125 19.8545C12.8125 20.211 13.1073 20.5 13.471 20.5H20.3415L20.4308 20.4941C20.7523 20.4514 21 20.1813 21 19.8545Z"
                                    fill="#200E32"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="prod__counter">
                        <button onClick={() => countHandler("dec")}>
                            <svg
                                width="8"
                                height="4"
                                viewBox="0 0 8 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.166992 0.833374H7.16699V3.16671H0.166992V0.833374Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                        <div className="count">{props.dish.quantity}</div>
                        <button onClick={() => countHandler("inc")}>
                            <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.16735 5.63537H0.166992V3.49563H3.16735V0.5H5.29779V3.49563H8.33366V5.63537H5.29779V8.66667H3.16735V5.63537Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
