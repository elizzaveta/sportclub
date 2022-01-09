import React, {useState, useEffect} from "react";
import {API} from "../../../../../index";
import {useParams} from "react-router-dom";
import UserInfo from "../../UserInfo";

export default function AddSubscription({token}) {
    const {userId} = useParams();

    const url = "http://localhost:8080/subscriptions"
    const [subscription, setSubscription] = useState(null)

    useEffect(() => {
        fetch(url, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(status)
            .then(json)
            .then(response => {
                setSubscription(response)
            });
    }, [url])

    let content = (subscription == null)
        ? <h2>Loading</h2>
        :
        <div className="content-wrapper">
            <h1>Add Subscription to User</h1>
            <UserInfo userId={userId} token={token}/>
            <h2>Choose Subscription</h2>
            <p>{subscription[0].subscriptionId}</p>
            <form onSubmit={()=>AddSubscriptionToUser(userId)}>
                <label htmlFor="cars">Choose Subscription:</label>
                <select className="login-input" name="cars" id="subscrSelect">
                    {subscription.map(subscriptionItem =>
                        <option
                            value={subscriptionItem.subscriptionId}>{subscriptionItem.category.name + ' monthsDuration:' + subscriptionItem.monthsDuration + ' visitsNumber:' + subscriptionItem.visitsNumber + ' price:' + subscriptionItem.price}</option>
                    )}
                </select>
                <label>Enter Subscription Start Date:</label>
                <input id="startDateInput" className="login-input" required="required" type="date"/>
                <input type="submit" value="Add Subscription To User"/>
            </form>
        </div>


    return (
        <div>{content}</div>
    )
}

function AddSubscriptionToUser(userId, token){
    let subscriptionId = document.getElementById('subscrSelect').value;
    let startDate = document.getElementById('startDateInput').value;
    let url = API + 'user-subscriptions';
    let body = {
        userId: userId,
            subscriptionId: subscriptionId,
        startDate: startDate
    }
    let json = JSON.stringify(body)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'
            , 'Access-Control-Allow-Origin': '*'
            , 'Authorization': `Bearer ${token}`
        },
        body: json
    };

    post(url, requestOptions)
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

function post(url, requestOptions){
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    alert("here")
}