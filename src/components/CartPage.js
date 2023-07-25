import React from 'react'
import './CartPage.css'
import Meals from './Meals/Meals'
import meals from '../assets/images.jpg';


export default function CartPage() {
  return (
    <div>
      <div className='main-image'>
        <img alt = "" src = {meals}/>
      </div>
      <main>
        <Meals/>
      </main>
    </div>
  )
}
