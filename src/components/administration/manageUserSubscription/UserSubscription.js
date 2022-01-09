import React, {useState, useEffect} from "react";
import "./ManageUser.css"
import SubscriptionInfoCards from "../../shared/subscription-info-cards/SubscriptionInfoCards";
import {requestJson} from "../../../requests";


export default function UserSubscription({userId, token}) {
    const [userSubscription, setUserSubscription] = useState({
        subscription: [],
        loading: true
    })

    useEffect(() => {
        requestJson(`user-subscriptions/${userId}`, 'GET', token)
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
