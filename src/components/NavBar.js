import React from "react";

import {NavLink} from "react-router-dom"

const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "9rem",
    
}
function NavBar(){
    return(
        <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        
    <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>

                <NavLink to="/aboutUs" style={navLinks}>
                    About
                </NavLink>

                <NavLink to="/booking" style={navLinks}>
                    Booking
                </NavLink>

                <NavLink to="/cars" style={navLinks}>
                    Car
                </NavLink>     
        </div>
    )
}
export default NavBar;