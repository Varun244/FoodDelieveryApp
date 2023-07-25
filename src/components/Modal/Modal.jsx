import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css"

function Modal() {

    const Ele = document.getElementById('cover'); 

    return (
        <>
            {ReactDOM.createPortal(
                <div className = {classes.modal}>
                    <div className = {classes.overlay}></div>
                    <div className = {classes.content}>
                        Order Placed Successfully ✅
                    </div>
                </div>
            ,Ele)
            }
        </>
    )
}

export default Modal
