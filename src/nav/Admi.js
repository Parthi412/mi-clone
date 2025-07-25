import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import Nav from './Nav';
import { useState, useEffect } from "react";



function Admi() {
   const [newItem, setNewItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/all")
      .then((res) => res.json())
      .then((info) => setNewItem(info))
      .catch((error) => console.error("Fetch error:", error));
  }, []);
 const del=(id)=>{
  fetch(`http://localhost:4000/delte/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    },

  })
  .then((res)=>res.json())
  .then((data)=>{
    setNewItem((pro)=>pro.filter((item)=>item._id !==id))
  })

 }
  return (
    <div>
      <Nav></Nav>
    <div className='co'>
<div className='fix'  style={{backgroundColor:"GrayText",height:"50vh",width:"400px"}}>
    <Link  to='/cre' style={{textDecoration:"none"}}> <h3 className='jt'>Create</h3></Link> 
        <Link  style={{textDecoration:"none"}}> <h3 className='jt'>Update</h3></Link> 

    <Link  style={{textDecoration:"none"}}> <h3 className='jt'>Get</h3></Link> 

    <Link to='/user'  style={{textDecoration:"none"}}> <h3 className='jt' >Logout</h3></Link> 
    
      <table className="table" style={{position:"relative",left:'500px',bottom:"500px",width:"1200px"}}>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {newItem.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.Last}</td>
              <td>{item.email}</td>
              <td><Link to={`/update/${item._id}`}><button >Edit</button></Link> <button onClick={()=>del(item._id)}>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    

         
</div>
       

</div>
     
      
    </div>
  )
}

export default Admi
