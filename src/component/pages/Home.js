import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    console.log("result.data : ", result.data);
    setUser(result.data.reverse());
  };
  

  const deleteUser = async id =>{
      await axios.delete(`http://localhost:3002/users/${id}`);
      loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h3>Registred React Users</h3>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col"  >Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <NavLink className="btn btn-primary mr-2 " to={`/users/${user.id}`}>View</NavLink>
                  <NavLink className="btn btn-outline-primary mx-2" to={`/users/edit/${user.id}`}>Edit</NavLink>
                 <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
