import React from 'react'
import './footer.scss'


const Footer = (props) => {
    return (
        <div className='footer' style={props.margin?{marginTop: props.margin}:null}>
            <p>
                All Rights Reserved © 2022. Designed by
                <a href='*'>Layouti Design LLC</a>
            </p>
        </div>
    )
}

export default Footer
