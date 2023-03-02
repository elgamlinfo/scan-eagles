import React from 'react';
import './menu-gallery.scss'
const MenuGallery = (props) => {
    return (
        <div className='menu_gallery'>
            <img src={props.photo.image} alt="" />
        </div>
    )
};

export default MenuGallery;
