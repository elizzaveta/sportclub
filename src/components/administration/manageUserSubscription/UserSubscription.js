import React, {useState, useEffect} from "react";
import "./ManageUser.css"
import {API} from "../../../index";


export default function UserSubscription({userId}) {
    const [userSubscription, setUserSubscription] = useState({
        subscription: null,
        loading: true
    })

    // !!
    // here will be getting user active subscriptions by id

    // make dynamic after implementing fetch
    let content = (false)
        ? <h2>Loading</h2>
        :
        <div >
            <h2>User Active Subscription(s):</h2>
            <div className="user-subscription-block">
                <h3>Subscription:</h3>
                <p>Category: Individual training</p>
                <p>Validity: 1 month</p>
                <p>Visits: 12 visits</p>
                <p>Start date: 01/01/2022</p>
            </div>
            <div className="left-user-subscription-block">
                <h3>Left visits: 5</h3>
                <h3>Expires on: 01/02/2022</h3>
            </div>
        </div>


    return (
        <div>{content}</div>
    )
}

// i just copypasted it here
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}