import React from "react";
import Rec from "./Images/Rec.gif";
const Contact= ()=>{
    return (<>
        <div className="container">
            <div className="py-4">
               <h1 className="dark">React v18.0</h1> 
          <img src={Rec} className="img-fluid" alt={Rec} />
<hr/>
<div>
</div>
            </div>
            <div className="shadow p-3">
            <form >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with Marko G Code.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>
        </div>
        </> )
}

export default Contact