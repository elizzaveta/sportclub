import React, {useState, useEffect} from "react";
import {API} from "../../../../../index";
import {useParams} from "react-router-dom";
import ManageOptions from "../../ManageOptions";


export default function MarkUserVisit({token}) {
    const [userSubscription, setUserSubscription] = useState({
        subscription: [],
        loading: true
    })
    const {userId} = useParams();

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

    const handleTakeOneVisitClick = ()=>{
        fetch(API + 'user-user-subscriptions/visit/' + userId, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(status)
            .then(json);
        alert("Visit is marked!")
        //window.location.pathname='/manage-user/'+userId;
    }

    let content = (userSubscription.loading)
        ? <p>Loading</p>
        :
        <div className="content-wrapper">
            <h1 className="center">Manage user</h1>
            <ManageOptions userId ={userId}/>
            <h2>Take one visit from user subscription:</h2>
            <h2>User Active Subscription(s):</h2>
            {userSubscription.subscription.map(subscriptionItem =>
                <div className="take-one-visit-wrapper">
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
                    <div>
                        <button className="take-one-visit-button" onClick={handleTakeOneVisitClick}>Take one visit</button>
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

