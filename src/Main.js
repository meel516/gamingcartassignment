import React, { useEffect, useState } from "react";
import { CartContext } from "./App";
import { useContext } from "react";
import { client } from "./Contentful";
import { options } from "./Razorpay";
import Cart from "./Cart";
import OrderAmount from "./components/OrderAmount";
import CartItems from "./components/CartItems";
import Game from "./Game.js";
import axios from "axios"
import CheckoutButton from "./components/CheckoutButton";
import CartTitle from "./components/CartTitle";



export default function Main(){
  let {data,idmap,total,setTotal}=useContext(CartContext)
  let sum=0
  function remove(id){
    idmap.current.delete(id)
  }
  function add(id){
    let prev=idmap.current.get(id)
    idmap.current.set(id,prev+1)
  }
  function decrease(id){
    let prev=idmap.current.get(id)
    idmap.current.set(id,prev-1)
  }
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
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    {<>
     

    {
     data.filter((entry)=>{
      
      if(idmap.current.has(entry.sys.id)){
        return true
      }
     }).map((entry)=>{
      let obj={...entry.fields,des:entry.fields.description.content[0].content[0].value,src:entry.fields.images[0].fields.file.url,id:entry.sys.id,remove,add,decrease}
      obj.quantity=idmap.current.get(obj.id)
 sum+=parseInt(obj.price)*parseInt(obj.quantity)
 setTotal(sum)
      return <>
      <CartTitle/>
      <CartItems {...obj}/></>
     })}
     {idmap.current.size==0||<><OrderAmount total={total} />
     <CheckoutButton onClick={()=> {
      
      
      
      
      try{

        console.log(total)
        options.amount=total*100
        console.log(options)
      
          axios.post("https://free4allshop.onrender.com/checkout",{
              amount:total
        }).then((order)=> {
          options.order_id=order.id
          let rzp1 = new window.Razorpay(options);
          rzp1.open()
        })
      
     
      }
      catch(error){
      console.log(error)
      }}}>Checkout</CheckoutButton></>}
     </>
    }
  </div>
</div>
        </>
    )
}