import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteTocart } from "./Crete";

function Show() {
    const MobileData = useSelector((state) => state.cart.CartItem);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(deleteTocart(id));
    };

    return (
        <div>
          <br>
          </br>
          <br>
          </br>
            <div className='container'>
         <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    {
      MobileData.map((bag) => (
        <tr key={bag.id}>
          <td><h3>{bag.title}</h3></td>
          <td><h6>{bag.price}</h6></td>
          <td><img src={bag.img} alt='imag' style={{ height: "100px", width: "100px" }} /></td>
          <button onClick={()=>removeItem(bag.id)}> Delete</button>
        </tr>
      ))
    }
  </tbody>
</table>


            </div>
            <br>
            </br>
            <br>
            </br>
        </div>
        
    );
}

export default Show;
