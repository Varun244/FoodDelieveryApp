import React,{useContext} from 'react'
import './MealDesc.css'
import AddCart from './AddCart'
import UseCart from '../../../store/UseCart';
import food_img from "../../../assets/food_img.png"

export default function MealDesc(props) {
  const cartCtx = useContext(UseCart);
    const price = `₹${props.price}`

    const addToCartHandler = (amount) => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    };
  return (
    <div className = "meal_sec">
      <div className = "img_sec">
        <img src= {food_img} alt="img not found" />
      </div>
      <div className='meal'>
      <div>
        <h3>{props.name}</h3>
        <div className='description'>{props.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <AddCart id={props.id} onAddToCart={addToCartHandler}/>
      </div>
      </div>
    </div>
  )
}
