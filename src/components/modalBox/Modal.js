import React,{useEffect } from 'react';
import './Modal.css';


export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  useEffect(()=> {
    window.scrollTo(0,0)
  })

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modal-bttn">
            <button type="button" onClick={ handleClose }>
                Ok
            </button>
        </div>
      </section>
    </div>
  )
}