import "./CartItems.css";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../App";
const CartItems = ({ title, price, quantity,src,remove,id }) => {
  let {idmap,refresh}=useContext(CartContext)
  return (
  
    <div className="rectangle-parent">
      <div className="group-child" />
      <span className="span">{quantity}</span>
      <span className="nike-mens-joyride">{title}</span>
      <span className="run-flyknit-shoes">Run Flyknit shoes</span>
      <img className="group-item" alt="" src="/group-4.svg" />
      <span className="span1">{price}</span>
      <img className="group-inner" alt="" src={src}/>
      <button className="ellipse-parent" onClick={()=>{remove(id)
         refresh((prev)=>!prev)}}>
        <div className="ellipse-div" />
        <img className="component-1-icon" alt="" src="/component-1.svg" />
      </button>
    </div>

  );
};

export default CartItems;
