import React from "react";
export default function Cart(props){
  return <>
  
<tr>
  <td>
    {props.title}
  </td>
  <td>
    {props.price}
  </td>
  <td>
    {props.quantity}
  </td>
</tr>

  
  </>
}