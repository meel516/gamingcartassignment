import React, { useEffect, useState } from "react";
import { CartContext } from "./App";
import { useContext } from "react";
import { client } from "./Contentful";
import Cart from "./Cart";
import Game from "./Game.js";




export default function Main(){
  let {data,idmap}=useContext(CartContext)
    return (
    <>
        <div className="container d-flex flex-column flex-lg-row mt-4 align-items-center align-items-lg-start justify-content-lg-start">
   {data.map((entry)=>{
    // console.log(entry.fields)
    let obj={...entry.fields,des:entry.fields.description.content[0].content[0].value,src:entry.fields.images[0].fields.file.url,id:entry.sys.id}
    // console.log(obj)
    return <Game {...obj}></Game>})}
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    {
      <table class="table">
         <thead class="table-dark">
      <tr>
     <th>
   item
     </th>
<th>
price
</th>
<th>
  quantity
</th>
      </tr>
    
  
    </thead>
    <tbody>
    {
     data.filter((entry)=>{
      if(idmap.current.has(entry.sys.id)){
        return true
      }
     }).map((entry)=>{
      let obj={...entry.fields,des:entry.fields.description.content[0].content[0].value,src:entry.fields.images[0].fields.file.url,id:entry.sys.id}
      obj.quantity=idmap.current.get(obj.id)

      return <Cart {...obj}/>
     })}
     </tbody>
     </table>
    }
  </div>
</div>
        </>
    )
}