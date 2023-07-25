import React from 'react'
import {FaCartArrowDown} from  'react-icons/fa'
import { useContext,useState,useEffect } from 'react'
import classes from './Cart.module.css'
import UseCart from '../../store/UseCart'

export default function Cart(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(UseCart);

  const { items } = cartCtx;

  const count = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick = {props.click}>
      <span className={classes.icon}>
        <FaCartArrowDown color='white' size = '1.4rem'/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  )
}





