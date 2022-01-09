import React, {useState, useEffect} from "react";
import "./ManageUser.css"
import {API} from "../../../index";


export default function UserSubscription({userId, token}) {
    const [userSubscription, setUserSubscription] = useState({
        subscription: [],
        loading: true
    })

    useEffect(() => {
        fetch(API + 'user-subscriptions/' + userId, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(status)
            .then(json)
            .then(response => {
                setUserSubscription({
                    subscription: response,
                    loading: false
                })
                console.log(response)
            });
    }, [token, userId])

    let content = (userSubscription.loading)
        ? <p>Loading</p>
        :
        <div>
            <h2>User Active Subscription(s):</h2>
            {userSubscription.subscription.filter(item => item.visitsNumber > 0).map(subscriptionItem =>
                <div>
                    <div className="user-subscription-block">
                        <h3>Subscription:</h3>
                        <p>Category: {subscriptionItem.subscription.category.name}</p>
                        <p>Validity: {subscriptionItem.subscription.monthsDuration} month</p>
                        <p>Visits: {subscriptionItem.subscription.visitsNumber} visits</p>
                        <p>Start date: {subscriptionItem.startTime}</p>
                    </div>
                    <div className="left-user-subscription-block">
                        <h3>Left visits: {subscriptionItem.visitsNumber}</h3>
                        <h3>Expires on: {subscriptionItem.endTime}</h3>
                    </div>
                </div>
            )}
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