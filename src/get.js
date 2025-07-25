import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GetData() {
  const [newItem, setNewItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/all")
      .then((res) => res.json())
      .then((info) => setNewItem(info))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      <table className="table">
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
              <td><Link to={`/update/${item._id}`}><button>Edit</button></Link> <button>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
