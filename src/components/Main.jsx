import { addtoCart } from "../redux/action/Action";
import { removetoCart } from "../redux/action/Action";
import { emptyCart } from "../redux/action/Action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import {useSelector} from 'react-redux'
import { productData } from './../redux/productReducer';
import { useEffect } from "react";


const Main = () =>  {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data)
  
  useEffect(()=> {
    dispatch(productList())
  }, [])
  return (
    <div>
      
      <h1>React Redux Saga</h1>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className="product-container">
        {
          data.map((item)=><div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name: {item.name} </div>
            <div>Color: {item.color} </div>
            <div>Price: {item.price} </div>
            <div>Brand: {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addtoCart(item))}>Add to Cart</button>
              <button onClick={() => dispatch(removetoCart(item.id))}>Remove to Cart</button>
              </div>
          </div>)

          
        }
      </div>
    </div>
  );
}

export default Main;
