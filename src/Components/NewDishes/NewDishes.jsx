import React from 'react'
import './style.scss'
const NewDishes = ({categ}) => {
    const {title, price, details, image} = categ
    const ConvertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
       return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
      }
  return (
    <div className='new_dishes'>
        <img src={image} alt />
        <div className='new_dishes_details'>
            <h3>{title}</h3>
            <p>{details}</p>
            <p><b>{ConvertToArabicNumbers(price)} جنيه</b></p>
            <button>أضافة</button>
        </div>
    </div>
  )
}

export default NewDishes