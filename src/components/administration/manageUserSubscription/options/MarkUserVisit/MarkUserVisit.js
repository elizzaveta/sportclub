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



    let content = (userSubscription.loading)
        ? <p>Loading</p>
        :
        <div className="content-wrapper">
            <h1 className="center">Manage user</h1>
            <ManageOptions userId ={userId}/>
            <h2>Take one visit from user subscription:</h2>
            <h2>User Active Subscription(s):</h2>
            {userSubscription.subscription.filter(item => item.visitsNumber > 0).map(subscriptionItem =>
                <div className="take-one-visit-wrapper">
                    <div>
                        <div className="user-subscription-block">
                            <h3>Subscription:</h3>
                            <p>Category: {subscriptionItem.subscription.category.name}</p>
                            <p>Category: {subscriptionItem.id}</p>
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
                        <button  className="take-one-visit-button" onClick={()=>handleTakeOneVisitClick(subscriptionItem.id, userId)}>Take one visit</button>
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


function handleTakeOneVisitClick(id, userId){
    // alert(id)
    fetch(API + 'user-subscriptions/visit/' + id, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(status)
        .then(json);
    window.location.pathname='/administration/manage-user/'+userId;
}
