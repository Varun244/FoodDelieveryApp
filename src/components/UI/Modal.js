import React from 'react'
import './Modal.css'
import {Fragment} from 'react'
import ReactDOM from 'react-dom'

const Back = (props) => {
    return <div className='back' onClick = {props.hide}/>;
  };
  const Lay = (props) => {
    return (
      <div className='lay'>
        <div className='content'>{props.children}</div>
      </div>
    );
  };
const Ele = document.getElementById('cover');  

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Back hide = {props.hide} />, Ele)}
      {ReactDOM.createPortal(
        <Lay>{props.children}</Lay>,Ele)}
    </Fragment>
  )
}




