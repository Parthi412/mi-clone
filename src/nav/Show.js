import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Mobile from './Mobile';

function Show() {
const MobileData=useSelector((state)=>state.cart.CartItem)
const dis=useDispatch()


  return (
    <div>
        {
            MobileData.map((bag)=>(
                <div key={bag.id}>
                    <h1>{bag.title}</h1>
                    <img src={bag.img}></img>
                </div>
            ))
        }
    
      
    </div>
  )
}

export default Show
