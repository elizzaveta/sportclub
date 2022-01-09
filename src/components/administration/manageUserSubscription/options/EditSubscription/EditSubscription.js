import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {API} from "../../../../../index";
import "../../ManageUser.css"
import {request, requestJson} from "../../../../../requests";

export default function EditUserSubscription({ token }) {
    const {userId} = useParams()

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



    const deleteSubscription = id => {
        request(`user-subscriptions/delete/${id}`, 'DELETE', token).then(() => {
            window.location.reload();
        })
    }

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
                        <button className="inline-half-a-button">Save changes</button>
                        <button className="inline-half-a-button" onClick={() => deleteSubscription(subscriptionItem.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>

    return (
        <div className="content-wrapper">{content}</div>
    )

}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
