import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from "./Nav";
import { createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext()
function App() {

  function set(val){
    setCartdata(prev=>([...prev,val]))
      }
  const [cartdata,setCartdata]=useState([set])
  console.log(cartdata)
  return (
    <CartContext.Provider value={{cartdata:cartdata}}>
    <div>
      <Nav/>
      <Main/>
    </div>
    </CartContext.Provider>
  );
}

export default App;
