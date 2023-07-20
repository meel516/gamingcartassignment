import React, { useEffect, useState } from "react";

import { client } from "./Contentful";
import Game from "./Game.js";




export default function Main(){
let [data,setData]=useState([])
    useEffect(()=>{
client.getEntries({content_type:'productPage'}).then((dta)=>{
    console.log(dta.items[0].fields)
    console.log(dta.items)
    setData(dta.items)
    
    // let e=dta.items[1].fields
    // let des=e.description.content[0].content[0].value
    // console.log(e.description.content[0].content[0].value)
    // e.des=des
    // setData({e})

})
    },[])
    return (
    
        <div className="container d-flex flex-column flex-lg-row mt-4 align-items-center align-items-lg-start justify-content-lg-start">
   {data.map((entry)=>{
    console.log(entry.fields)
    let obj={...entry.fields,des:entry.fields.description.content[0].content[0].value,src:entry.fields.images[0].fields.file.url}
    console.log(obj)
    return <Game {...obj}></Game>})}
        </div>
    )
}