import React from "react";
import { ReactDOM } from "react";
import displaypic from "./images/image 12.png";
import star from "./images/Star 1.png";
import status from "./images/Group 80.png";

function Card(){
    return(
        <div className="card">
            <div className="card-img">
                <img src = {displaypic} className="display-pic" alt=''/>
                {/* <img src = {status} className="status" alt=''/> */}
            </div>
            <div className="about">
                <img src = {star} className="star" alt=''/>
                <p className="rating"> 5.0 </p>
                <p className="comment"> (6) </p>
                <p className="country"> USA </p>
            </div>
            <p className="c-name">
                Life lessons with Katie Zaferes
            </p>
            <div className="rate">
                <p>From $136</p>
                 / person
            </div>
         
        </div>
     )
}


export default Card;