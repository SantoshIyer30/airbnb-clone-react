import React from "react";
import { ReactDOM } from "react";
import logo from "./images/airbnb 1.png";


function Navbar(){
    return(
        <div className="navbar">
            <img src = {logo} className="nav-logo" alt=''/>
        </div>
     )
}


export default Navbar;