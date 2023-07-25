import React , {Fragment} from 'react'
import MealSummary from './MealSummary'
import Available from './Available'


export default function Meals() {
  return (
    <Fragment>
      <MealSummary/>
      <Available/>
    </Fragment>
  )
}
