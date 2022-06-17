import React from "react";
import { ReactDOM } from "react";
import displaypic from "./images/image 12.png";
import star from "./images/Star 1.png";
import status from "./images/Group 80.png";

function Card(props){
    console.log(props);
    return(
        <div className="card">
            <div className="card-img">
                <img src = {props.img} className="display-pic" alt=''/>
                {/* <img src = {status} className="status" alt=''/> */}
            </div>
            <div className="about">
                <img src = {star} className="star" alt=''/>
                <p className="rating"> {props.rating} </p>
                <p className="comment"> {props.comment} </p>
                <p className="country"> {props.country} </p>
            </div>
            <p className="c-name">
                {props.cname}
            </p>
            <div className="rate">
                <p>{props.rate}</p>
                 / person
            </div>
        </div>
     )
}


export default Card;