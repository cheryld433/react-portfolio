import React from "react";
import {Link } from "react-router-dom";
// The primary way to allow users to navigate around your application. 
{/* <Link> will render a fully accessible anchor tag with the proper href. */}

const Navbar = () => {
    return(
        <div className="nav-wrapper">
            <ul className="navbar">
                <li className="nav-item">
                    <Link to="/" 
                </li>
            </ul>
        </div>
      
    )

}

export default Navbar;
