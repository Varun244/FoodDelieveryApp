import React from 'react'
import classes from './Available.module.css';
import Card from '../UI/Card'
import MealDesc from './MealComp/MealDesc'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Available() {
  const [data,setData]=useState([]);
  useEffect(()=>{ 
      axios.get('https://varuncafe.herokuapp.com/items')
          .then(response => {
              console.log(response)
              setData(response.data)
          })
  },[]) 


    const list = data.map(meal=>
    <MealDesc
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}/>
    )
  return (
    <section className={classes.meals}>
      {list}
    </section>
  )
}
