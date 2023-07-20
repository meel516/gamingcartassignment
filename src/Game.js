import React, { useEffect } from "react";
export default function Game(props){
    console.log(props,'im props')
    return (<div class="card me-4 ms-4" style={{width:'18rem'}}>
    <img src={props.src} class="card-img-top img-thumbnail w-100 h-100 px-0" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.des}</p>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
  </div>
)
}