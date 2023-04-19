import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { productSearch } from '../redux/productAction'

const Header = () => {
    const result = useSelector((state)=> state.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result)
  return (
    <div className='header'>
      <Link to='/'><h1 className='logo'>E-comm</h1></Link>
      <div className='search-box'>
        <input type="text" onChange={(event)=> dispatch(productSearch(event.target.value))} placeholder='Search Product' />
      </div>
        <Link to='/cart'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <BsFillCartPlusFill />
        </div> </Link>
        
    </div>
  )
}

export default Header