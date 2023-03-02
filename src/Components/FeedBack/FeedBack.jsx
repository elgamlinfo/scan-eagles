import React, { Fragment, useState } from "react";
import "./feedback.scss";
import Popup from '../Popup/Popup'
import angry from '../../images/angry.gif'
import happy from '../../images/happy.gif'
import axios from "axios";

const FeedBack = (props) => {
    const [active, setActive] = useState(false);
    const [activeMessage, setActiveMessage] = useState(false);
    const [title, setTitle] = useState(null);
    const [feeds, setfeeds] = useState([]);
    const [feedState, setFeedState] = useState(null)
    const [feedNum, setFeedNum] = useState([])

    function feedCheckClick(e) {
        if(e.target.className === "feedback active") {
            document.querySelector('#angey').classList.remove("active")
            document.querySelector('#happy').classList.remove("active")
            props.feedActiveHandler()
            setTitle(null)
            setfeeds([])
            setActive(false)
        }else {
            return
        }
    }
    function popCheckClick() {
            document.querySelector('#angey').classList.remove("active")
            document.querySelector('#happy').classList.remove("active")
            props.feedActiveHandler()
            setTitle(null)
            setfeeds([])
            setActive(false)
    }

    function checkClick(e) {
        e.target.classList.toggle("active");
        document.querySelector('.feedback__send').classList.add("active")
        let isExist = feedNum.find(num => num === e.target.id);
        if(isExist){
            setFeedNum(state => state = feedNum.filter(num => num !== e.target.id))
        }else {
            setFeedNum(state => state.concat(e.target.id))
        }
    }

    function statusCheck(e) {
        e.currentTarget.classList.add("active");
        setActive(true);
        if (e.target.id === "happy") {
            e.currentTarget.previousElementSibling.classList.remove("active");
            setTitle("Satisfied");
            setFeedState(1)
            setFeedNum([])
            setfeeds([
                {message: "easy to use system", id: 6},
                {message: "Requesting orders simply", id: 7},
                {message: "Easily tracking orders", id: 8},
                {message: "Nice visuals", id: 9},
                {message: "Great following", id: 10},
            ]);
        } else {
            e.currentTarget.nextElementSibling.classList.remove("active");
            setTitle("Not Satisfied");
            setFeedState(0)
            setFeedNum([])
            setfeeds([
                {message: "Bad speed", id: 1},
                {message: "Difficult to request orders", id: 2},
                {message: "Inaccurate tracking order", id: 3},
                {message: "Ugly visuals", id: 4},
                {message: "Lack on following", id: 5},
            ]);
        }
    }

    function sendHandler() {
        let postData = {face: feedState}
        feedNum.forEach(num => {
            postData[`input${num}`] = num
        })
        const headers = {
            'Content-Type': 'application/json',
        };
        setActiveMessage(true)
        axios.post(`${process.env.REACT_APP_API}/storefeedback`, postData,{headers})
        .then(res => {
            setFeedState(null)
            setFeedNum([])
        })
    }

    return (
        <>
            <div className={`feedback ${props.feedActive?"active":''}`} onClick={(e) => feedCheckClick(e)}>
                <div className="feedback__content">
                    <div className="feedback__cont__head">
                        <h3>We'd Welcome your Feedback</h3>
                        <p>Your rating help us improve</p>
                    </div>
                    <div className="emoji">
                            <img src={angry} id="angey" alt="" onClick={(e) => statusCheck(e)}/>
                            <img src={happy} alt="" id="happy" onClick={(e) => statusCheck(e)}/>
                    </div>
                    <div className={`feedback__info ${active ? "active" : ""}`}>
                        <div className="feedback__info__head">
                            <h3>{title}</h3>
                            <p>What could have been better?</p>
                        </div>
                        <div className="feedback__check">
                            {feeds.map((feed, indx) => {
                                return (
                                    <Fragment key={feed.id}>
                                        <div
                                            className="check__btn"
                                            id={feed.id}
                                            onClick={(e) => checkClick(e)}
                                        >
                                            {feed.message}
                                        </div><br/>
                                    </Fragment>
                                )})}
                        </div>
                        <button className="feedback__send" onClick={() => sendHandler()}>send</button>
                    </div>
                </div>
            </div>
            <Popup 
                active={activeMessage} 
                setActiveMessage= {setActiveMessage} 
                popCheckClick={popCheckClick}
                title="We have received your feedback successfully. We are happy to reviewing."
            />
        </>
    );
};

export default FeedBack;
