import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import Sidenav from './Sidenav';
import './nav/Admin.css';

function Formcrete() {
  const handle=(e)=>{
    e.preventDefault()
    const form=e.target

    const name=form.name.value
    const Last=form.Last.value
    const email=form.email.value

    if(name===""||Last===""||email===""){
      toast.warn("All filed requried")
      return
    }
    const by={
      name,
      Last,
      email
    }
    fetch("http://localhost:4000/pos",{
      method:"POST",
      headers:{
    "Content-Type": "application/json"

      },
      body:JSON.stringify(by)
     
      })
      .then((res)=>res.json())
      .then((data)=>{
      toast.success("Sucefully submited")
    })
  }

  return (
    <div>
      <div style={{ marginTop: "140px" }}>
        <Sidenav />
      </div>

      <section>
        <h1 style={{ textAlign: "center", position: "relative", bottom: "50px" }}>
          Welcome to Create Page
        </h1>

        <form style={{ width: "600px", position: "relative", left: "700px" }} onSubmit={handle}>
          <label value="name"></label>

          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <p style={{ marginLeft: "40px", color: "red" }}></p>
<label value="Last"></label>
          <input
            type="text"
            placeholder="Last Name"
            name="Last"
            id="Last"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <p style={{ marginLeft: "40px", color: "red" }}></p>
<label value="email"></label>

          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }}
          />
          <br />
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <br />

          <button
            className="btn btn-primary"
            style={{ position: "relative", left: "150px", padding: "20px", width: "300px" }}
          >
            Submit
          </button>
        </form>
      </section>
      <ToastContainer /> 
    </div>
  );
}

export default Formcrete;
