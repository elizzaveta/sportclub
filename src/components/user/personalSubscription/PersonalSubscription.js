import React, {useState, useEffect} from "react";
import "./PersonalSubscription.css"
import {API} from "../../../index";

export default function PersonalSubscription({token}) {

    const [subscription, setSubscription] = useState(null)

    useEffect(() => {
        fetch(API + 'my-subscriptions', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(status)
            .then(json)
            .then(response => {
                setSubscription(response)
                console.log(response)
            });
    }, [token])

    let content = (subscription)
        ? <h2>You dont have active subscription yet</h2>
        :
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