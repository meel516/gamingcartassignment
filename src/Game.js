import React, { useContext, useEffect } from "react";
import { CartContext } from "./App";
export default function Game(props){
    // console.log(props,'im props')
    let {idmap,refresh}=useContext(CartContext)
    return (<div class="card me-4 ms-4" style={{width:'18rem'}}>
    <img src={props.src} class="card-img-top img-thumbnail w-100 h-100 px-0" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.des}</p>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" onClick={()=>{
        idmap.current.set(props.id,1)
        refresh((prev)=>!prev)
    
        }}>Add to cart</button>
    </div>
  </div>
)
}