import React from "react";
import "./PersonalSubscription.css"

export default function PersonalSubscription(){

    let content =
        <div className="content-wrapper">
            <h1 className="center">My current subscription</h1>
            <div className="personal-subscription-block">
                <h3>Subscription:</h3>
                <p>Category: Individual training</p>
                <p>Validity: 1 month</p>
                <p>Visits: 12 visits</p>
                <p>Start date: 01/01/2022</p>
            </div>
            <div className="left-subscription-block">
                <h3>Left visits: 5</h3>
                <h3>Expires on: 01/02/2022</h3>
            </div>
        </div>


    return(
        <div>{content}</div>
    )
}