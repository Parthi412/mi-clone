import React, { useEffect, useState } from 'react';
import Sidenav from './Sidenav';
import './nav/Admin.css'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Update(){  
  const { id } = useParams()
  const [newItem, setNewItem] = useState({
    name: "",
    Last: "",
    email: ""
  });

  useEffect(() => {
    fetch(`http://localhost:4000/all/${id}`)
      .then((res) => res.json())
      .then((info) => setNewItem(info))
      // .catch((error) => console.error("Fetch error:", error));
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    const name = form.name.value
    const Last = form.Last.value
    const email = form.email.value

    if (name === "" || Last === "" || email === "") {
      toast.warn("All filed requried")
      return
    }
    const by = {
      name,
      Last,
      email
    }
    fetch(`http://localhost:4000/up/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify(by)

    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Sucefully submited")
      })
  }

  return (
    <div >
      <br>
      </br>
      <br>
      </br>
      <Sidenav></Sidenav>
      <section>
        <h1 style={{ textAlign: "center" }}>Welcome to Update page</h1>
        <form style={{ background: "white", width: "600px", position: "relative", left: "700px", }} onSubmit={handleSubmit}  >
          <label >First </label>
          <input type="text" placeholder="Enter your name" name="name" id='name' style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }} ></input>
          <br></br>
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <label >last</label>
          <input type="text" placeholder="Last Name" name='Last' id='Last' style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }} />
          <br></br>
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <label>email</label>
          <input type="email" placeholder="Email" name='email' id='email' style={{ padding: "10px", width: "500px", marginTop: "20px", marginLeft: "50px" }} />
          <br></br>
          <p style={{ marginLeft: "40px", color: "red" }}></p>
          <br>
          </br>
          <button className='btn btn-primary' style={{ position: "relative", left: "150px", padding: "20px", width: "300px" }} >Submit</button>
        </form>
      </section>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Update;
