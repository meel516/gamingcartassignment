import "./CartItems.css";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../App";

import "./CartItems.css";
const CartItems = ({ title, price, quantity,src,remove,id,add,decrease }) => {
  let {idmap,refresh}=useContext(CartContext)
  return(
    <div className="rectangle-parent">
      <div className="group-child" />
      <span className="span">{quantity}</span>
      <span className="nike-mens-joyride">{title}</span>
      <span className="run-flyknit-shoes">Run Flyknit shoes</span>
      <div className="vector-parent">
        <img className="group-item" alt="" src="/rectangle-6.svg" onClick={()=>{add(id)
         refresh((prev)=>!prev)}}/>
        <img className="group-inner" alt="" src="/rectangle-7.svg" onClick={()=>{decrease(id)
         refresh((prev)=>!prev)}} />
      </div>
      <span className="span1">{price}</span>
      <img className="rectangle-icon" alt="" src={src} />
      <button className="ellipse-parent"  onClick={()=>{remove(id)
         refresh((prev)=>!prev)}}>
        <div className="ellipse-div" />
        <img className="component-1-icon" alt="" src="/component-1.svg" />
      </button>
    </div>
  );
};

export default CartItems;