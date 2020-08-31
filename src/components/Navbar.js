import React from "react";
import {Link } from "react-router-dom";
// The primary way to allow users to navigate around your application. 
// {/* <Link> will render a fully accessible anchor tag with the proper href. */}

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
            <ul className="navbar">
                <li className="navbar-item">
                    <Link to="/" className={window.location.pathname === "/" ? "navbar=link active" : "navbar-link"}>
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className={window.location.pathname === "/about" ? "navbar=link active" : "navbar-link"}>
                        About
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "navbar=link active" : "navbar-link"}>
                        Portfolio
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className={window.location.pathname === "/portfolio" ? "navbar-link active" : "navbar-link"}>
                        Contact
                    </Link>               
                </li>
            </ul>
        </div>
      
    )

}

export default Navbar;
