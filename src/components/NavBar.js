import React from "react";

import {NavLink} from "react-router-dom"

const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "9rem"
}
function NavBar(){
    return(
        <div>
    <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>

                <NavLink to="/aboutUs" style={navLinks}>
                    About
                </NavLink>

                <NavLink to="/ourRooms" style={navLinks}>
                    Booking
                </NavLink>

                <NavLink to="/restaurant" style={navLinks}>
                    Car
                </NavLink>
                
        </div>
    )
}
export default NavBar;