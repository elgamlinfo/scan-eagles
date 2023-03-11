import React from 'react'
import './style.scss'
import { cartActions } from '../../Store/cartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify'
const NewDishes = ({categ}) => {
    const {title, price, details, image} = categ
    const [selected, setSelected] = useState(null)
    const dispatch = useDispatch()
    
    const handleClick = () => {
        if (selected) { 
            dispatch(cartActions.addToCart(selected));
            toast.success('Order Added Successfully')
        }else {
            toast.error('Please Select Price')
        }
    } 
    
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
            {Array.isArray(price)?<form>
                {price.map((p,i) =>  <label key={i}>
                    <input type='radio' name='price' value={p.price} onChange={(e) => setSelected({...categ, price: categ.price.filter(p => e.target.value == p.price)[0]})}/>
                    {`${p.type} (${ConvertToArabicNumbers(price)}) جنيه`}
                </label>)}
            </form>:<div>{`${ConvertToArabicNumbers(price)} جنيه`}</div>}
            <button onClick={() => handleClick()}>أضافة</button>
        </div>
    </div>
  )
}

export default NewDishes