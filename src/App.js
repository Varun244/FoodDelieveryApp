// import "./styles.css";
import {Fragment , useState} from 'react'
import Header from './components/Layout/header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartPage from './components/CartPage'
import AboutUs from './components/AboutUs'
import CartProvider from './store/CartProvider'
import HomePage from './components/HomePage'
import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal/Modal"

export default function App() {
  const[cart,showCart] = useState(false);
  const [popup,setPopup] = useState(false);

  const showhandler=()=>{
    showCart(true)
  }

  const Hidehandler=()=>{
    showCart(false)
  }

  const popupHandler = () => {
    
    setPopup(true);
    showCart(false);

    setTimeout(() => {
      setPopup(false);
    },1000);
  }

  return (
    <CartProvider>
      <Fragment>
        {cart && <Cart hide = {Hidehandler} popupHandler = {popupHandler}/>}
        {popup && <Modal/>}
        <Header show = {showhandler}/>

        <Routes>
          <Route
            path = "/"
            element = {
              <HomePage/>
            }
          />
          <Route
            path = "/cartpage"
            element = {
              <CartPage/>
            }
          />
          <Route
            path = "/aboutus"
            element = {
              <AboutUs/>
            }
          />
        </Routes>
      </Fragment>
    </CartProvider>
  );
}

