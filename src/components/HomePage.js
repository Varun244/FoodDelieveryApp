// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React , {Fragment} from 'react'
import {Link} from "react-router-dom"
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.png'


export default function HomePage() {
  return (
    <Fragment>
      <h1 style = {{marginTop:'7rem'}} className='text-center'>Services that we offer</h1>
      <div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="card">
  <img src={s2} className="card-img-top" alt="..." height = "450px"/>
  <div className="card-body">
    <h3 style = {{color:'black'}} className="card-title">Products Available</h3>
    <p className="card-text">We deliever almost all food items including groceries and Many more.Order your first product now by clicking the below button</p>
    <Link to = "/cartpage" className="btn btn-primary">See Available Products</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src={s3} className="card-img-top" alt="..." height = "470px"/>
  <div className="card-body">
    <h3 style = {{color:'black'}} className="card-title">Super Fast Delievery</h3>
    <p className="card-text">Areas in the 5 km radius will get their Delievery in under 30 minutes otherwise free of cost.</p>
    <Link to ="/cartpage" className="btn btn-primary">Go order</Link>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card">
  <img src={s4} className="card-img-top" alt="..." height = "450px"/>
  <div className="card-body">
    <h3 style = {{color:'black'}} className="card-title">Zero Contact Delievery</h3>
    <p className="card-text">Covid has taught everyone the importance of hygiene.Therefore we deliever food which is completely untouched.</p>
    <Link href="/cartpage" alt = "" className="btn btn-primary">Order Now</Link>
  </div>
</div>
    </div>
  </div>
</div>
    </Fragment>
  )
}
