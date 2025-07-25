import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div>
        <div className='fix'  style={{backgroundColor:"GrayText",height:"50vh",width:"400px"}}>
    <Link  to='/cre' style={{textDecoration:"none"}}> <h3 className='jt'>Create</h3></Link> 
        <Link to='/update' style={{textDecoration:"none"}}> <h3 className='jt'>Update</h3></Link> 

    <Link to='/GET'   style={{textDecoration:"none"}}> <h3 className='jt'>GET DATA</h3></Link> 

    <Link to='/user'  style={{textDecoration:"none"}}> <h3 className='jt' >Logout</h3></Link> 

         
</div>
      
    </div>
  )
}

export default Sidenav
