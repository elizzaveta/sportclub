import React from "react";
import "./Landing.css"
import {Link} from "react-router-dom"

function Landing(){
    return(
        <div className="main">
            <div className="l-wrapper">
                <div className="shadow-top-block"></div>
                <div className="info">
                    <div className="company-name-landing">SLH gym</div>
                    <div className="moto">Build your body and future with us</div>
                    <Link to="/my-subscription" className="track-button link-router link-white">Track my subscription</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing