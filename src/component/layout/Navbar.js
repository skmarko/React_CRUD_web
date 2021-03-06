import React from "react";
import { NavLink} from "react-router-dom";
const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                
                <span className="navbar-brand" >React-Marko-G </span>
                <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/about">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/redux_use">Redux Example</NavLink>
                        </li>
                      
                    </ul>

                </div>
                <NavLink className="btn btn-outline-light" to ="/users/add">Registration</NavLink>
            </div>
            
        </nav>

    )
}
export default Navbar