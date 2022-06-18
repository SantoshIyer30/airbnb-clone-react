import React from "react";
import star from "./images/Star 1.png";

function Card(props){   
    let badgeText 
    if (props.openSpots === 0){
        badgeText ="SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText&&<div className="card-badge">{badgeText}</div>}
            <div className="card-img">
                <img src = {'./images/'+ props.coverImg} className="display-pic" alt=''/>
                {/* <img src = {status} className="status" alt=''/> */}
            </div>
            <div className="about">
                <img src = {star} className="star" alt=''/>
                <p className="rating"> {props.stats.rating} </p>
                <p className="comment"> ({props.stats.reviewCount}) </p>
                <p className="country"> •USA </p>
            </div>
            <p className="c-name">
                {props.title}
            </p>
            <div className="rate">
                <p>{props.price}</p>
                 / person
            </div>
        </div>
     )
}


export default Card;