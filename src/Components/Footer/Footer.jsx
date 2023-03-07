import React from 'react'
import './footer.scss'


const Footer = (props) => {
    return (
        <div className='footer' style={props.margin?{marginTop: props.margin}:null}>
            <p>
                All Rights Reserved © 2023. Designed by
                <a href='https://www.layouti.com'>Layouti Design LLC</a>
            </p>
        </div>
    )
}

export default Footer
