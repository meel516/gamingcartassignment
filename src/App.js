import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from "./Nav";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { client } from "./Contentful";
export const CartContext = createContext()
function App() {


  let [data,setData]=useState([])
  let idmap=useRef(new Map());
    useEffect(()=>{
     client.getEntries({content_type:'productPage'}).then((dta)=>{
    // console.log(dta.items[0].sys.id)
    // console.log(dta)
    setData(dta.items)
    
    // let e=dta.items[1].fields
    // let des=e.description.content[0].content[0].value
    // console.log(e.description.content[0].content[0].value)
    // e.des=des
    // setData({e})

})
    },[])
      const [cartrefresh,setrefresh]=useState(false)
  return (
    <CartContext.Provider value={{data:data,idmap:idmap,refresh:setrefresh}}>
    <div>
      <Nav/>
      <Main/>
    </div>
    </CartContext.Provider>
  );
}

export default App;
