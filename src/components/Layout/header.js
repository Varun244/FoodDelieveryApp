import {Fragment} from 'react'
import Cart from './Cart'
import classes from './Header.module.css'
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  return (
    // <Fragment>
    //   <header className={classes.header}>
    //     <h1><Link to="/">React Meals</Link></h1>
    //     <h1><Link to="../../HomePage">Home</Link></h1>
    //     <h1><Link to="../../CartPage">CartItems</Link></h1>
    //     <Cart click={props.show}/>
    //   </header>
      
    // </Fragment>

    <Fragment>
      <header className={classes.header}>
        <Link to = "/"><h1>Food Track</h1></Link>
        <Link to = "/">Home</Link>
        <Link to = "/cartpage">Cart Items</Link>
        <Cart click={props.show}/>
      </header>
      
    </Fragment>
  )
}
export default Header
