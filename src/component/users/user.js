import React,{ useEffect,useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import './User.css'

const User =() =>{
    const [user, setUser]= useState({
        name:'',
        username:'',
        email:''
        
    });

    
const{id} = useParams();

useEffect(()=>{
    loadUser();
}, [])
const loadUser = async ()=>{
    const res = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(res.data);
}
    return (
        <div className="contanier">
           
<h2 className="display-4">User Id:{id}</h2>
<hr/>
<ul className="list-group w-50">
    <li className="list-group-item">name:{user.name}</li><li className="list-group-item">userName:{user.username}</li><li className="list-group-item">Email:{user.email}</li><li className="list-group-item">Phone:{user.phone}</li>
</ul>
<NavLink className="btn btn-primary"  to="/">Return Home</NavLink>
        </div>
    )
}
export default User