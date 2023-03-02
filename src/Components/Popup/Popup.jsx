import React from "react";
import { useNavigate } from "react-router-dom";
import "./popup.scss";

const Popup = (props) => {
    const navigate = useNavigate()
    return (
        <div className={`popup ${props.active?"active":''}`}>
            <div className="message">
                <div className="pop__img">
                    <svg
                        width="140"
                        height="140"
                        viewBox="0 0 128 114"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M102.603 24.0883C106.309 24.7059 114.215 23.8412 116.191 15.4412C118.168 7.0412 124.221 4.11767 127 3.7059"
                            stroke="#F1603D"
                            strokeWidth="0.617647"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle
                            cx="80.6764"
                            cy="110.25"
                            r="3.39706"
                            fill="#F1603D"
                        />
                        <circle
                            cx="57.8233"
                            cy="4.01472"
                            r="4.01471"
                            fill="#53B175"
                        />
                        <circle
                            cx="31.2647"
                            cy="98.5147"
                            r="3.70588"
                            stroke="#53B175"
                            strokeWidth="0.617647"
                        />
                        <circle
                            cx="122.985"
                            cy="49.103"
                            r="3.70588"
                            stroke="#53B175"
                            strokeWidth="0.617647"
                        />
                        <circle
                            cx="23.2354"
                            cy="41.0735"
                            r="3.70588"
                            stroke="#F1603D"
                            strokeWidth="0.617647"
                        />
                        <circle
                            cx="117.426"
                            cy="57.1324"
                            r="2.47059"
                            stroke="#F1603D"
                            strokeWidth="0.617647"
                        />
                        <circle
                            cx="69.5587"
                            cy="105.926"
                            r="2.16176"
                            fill="#53B175"
                        />
                        <circle
                            cx="68.9411"
                            cy="10.8088"
                            r="2.16176"
                            fill="#F1603D"
                        />
                        <circle
                            cx="69.8679"
                            cy="55.5883"
                            r="37.6765"
                            fill="#53B175"
                        />
                        <path
                            d="M27.5589 70.2143C25.9118 72.6849 21.0118 77.2555 14.5883 75.7731C8.16477 74.2908 9.02947 69.5967 10.2648 67.4349C14.2794 66.5083 18.9118 70.3256 14.5883 79.1702C10.2648 86.1618 2.85294 84.6178 1 83.3825"
                            stroke="#6E89FA"
                            strokeWidth="0.617647"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M98.2793 92.6471C101.882 93.4706 108.779 97.1559 107.544 105.309"
                            stroke="#F7B23B"
                            strokeWidth="0.617647"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle
                            cx="69.8676"
                            cy="55.5883"
                            r="32.4265"
                            stroke="white"
                            strokeWidth="0.617647"
                        />
                        <path
                            d="M55.0439 54.9706L65.5439 65.1618L85.3087 46.9412"
                            stroke="white"
                            strokeWidth="9.26471"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <p className="mess__info">
                    {props.title}
                </p>
                {/*eslint-disable-next-line*/}
                <button className="close__btn" onClick={() =>  (props.setActiveMessage(false), props.popCheckClick?props.popCheckClick():navigate('/cart'))}>close</button>
                {/*eslint-disable-next-line*/}
                <button className="close__icon" onClick={() => (props.setActiveMessage(false), props.popCheckClick?props.popCheckClick():navigate('/cart'))}>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.21875 0.78125L0.78125 2.21875L9.5625 11L0.78125 19.7812L2.21875 21.2188L11 12.4375L19.7812 21.2188L21.2188 19.7812L12.4375 11L21.2188 2.21875L19.7812 0.78125L11 9.5625L2.21875 0.78125Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Popup;
