import React from "react";
import Rec from "./Images/Rec.gif";
import sk_img from "./Images/sk_img.jpg"
const Contact= ()=>{
  let imgStyle =['rounded-circle'];

    return (<>
        <div className="container">
            <div className="py-4">
               <h1 className="dark">React v18.0</h1> 
          <img src={Rec} className="img-fluid" alt={Rec} />
<hr/>
<div>
</div>
            </div>
            <div className="shadow p-3 align-items-center">
            <form  className="form">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" />
    <div id="emailHelp" className="form-text">We'll never share your email with Marko G Code.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label">Password</label>
    <input type="password" className="form-control" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>
        </div>
        <hr/>
        <div className="Web" data-animate-effect="fadeIn">
							<div className="profile-thumb" ></div>
              <img className={imgStyle}  src={sk_img} alt=""/>
							<h1><span>SHEETAL KUMAR MARKO</span></h1>
							<h3><span>FRONT-END Developer</span></h3>
              <h4 className="email"><span>Email:skmark516@gmail.com</span></h4>
						
						</div>
        </> )
}

export default Contact