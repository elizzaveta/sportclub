import React, {useState, useEffect} from "react";
import "./ManageUser.css"
import {API} from "../../../index";
import SubscriptionInfoCards from "../../shared/subscription-info-cards/SubscriptionInfoCards";


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
            <SubscriptionInfoCards subscriptions={userSubscription.subscription}/>
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