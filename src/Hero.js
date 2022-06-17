import React from "react";
import { ReactDOM } from "react";
import heroimage from "./images/Group 77.png";

function Hero(){
    return(
        <div className="hero">
            <img src = {heroimage} className="hero-logo" alt=''/>
            <h2 className="hero-header">Online Experiences</h2>
            <p className="hero-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
     )
}


export default Hero;