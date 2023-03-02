import React from "react";
import "./aside-menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const AsideMenu = (props) => {
    const lang = Cookies.get('lang')
    const qnt = useSelector(state => state.cart.cart.qnt)
    const mainData = useSelector(state => state.mainData.data)
    let trans = props.asidedata.reanslation;
    let url = props.asidedata.url;
    return (
        <div className={`aside__menu ${props.active ? "active" : ""} ${lang === "ar"?"rtl":""}`}>
            <div className="aside__menu__header">
                <p>{trans.mainmenu}</p>
                <button
                    className="toggle__close"
                    onClick={() => props.activeHandler()}
                    aria-label="close"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="aside__menu__body">
            {mainData&&mainData.ordertoggle !==0 && mainData.temp !==  "5"?<Link to="/cart">
                    <span>{trans.cart} ({qnt})</span>
                    <span>
                        <svg
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
                        </svg>
                    </span>
                </Link>:null}
                <a href={url.home}>{trans.home}</a>
                <a href={url.about}>{trans.about}</a>
                <a href={url.gallery}>{trans.gallery}</a>
                {mainData&&mainData.reservationtoggle !==0?<Link to="/reservation">{trans.booking}</Link>:null}
                <a href={url.menu}>{trans.menu}</a>
                <a href={url.contact}>{trans.contact}</a>
                {/* eslint-disable-next-line*/}
                {mainData&&mainData.feedbacktoggle !==0?<a href="*" onClick={(e) => (props.feedActiveHandler(e), props.activeHandler())}>{trans.feedback}</a>:null}
            </div>
        </div>
    );
};

export default AsideMenu;
