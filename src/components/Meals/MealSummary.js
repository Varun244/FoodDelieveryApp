import React from 'react'
import classes from './MealSummary.module.css'
export default function MealSummary() {
  return (
    <section className = {classes.summary} >
      <h2>Food Track ,now in your close proximity</h2>
      <p>
        Order Your Favourite meal sitting anywhere.We provide<br/> the best quality
        food and at correct time.
      </p>
      <p>
        Our Meals are healthy and cooked by master chefs <br/> maintaining the required hygiene!
      </p>
    </section>
  )
}
