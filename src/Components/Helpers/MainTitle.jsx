import React from 'react'
import './helpers.scss'


const MainTitle = (props) => {
    return (
        <div className='main__title' >
            <h2 style={props.margin? {paddingBottom: 0}:{paddingBottom: "10px"}}>{props.title}</h2>
        </div>
    )
}

export default MainTitle
