import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
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

    const updateSubscription = (id, visitsNumber, endTime) => {
        request('user-subscriptions/update', 'PATCH', token, {
            id, visitsNumber, endTime
        }).then(() => window.location.reload());
    }

    let content = (userSubscription.loading)
        ? <p>Loading</p>
        :
        <div>
            <h2>User Active Subscription(s):</h2>
            {userSubscription.subscription.filter(item => item.visitsNumber > 0).map(subscriptionItem =>
                <EditOneSubscriptionCard
                    subscriptionItem={subscriptionItem}
                    deleteSubscription={deleteSubscription}
                    updateSubscription={updateSubscription}/>
            )}
        </div>

    return (
        <div className="content-wrapper">{content}</div>
    )

}


function EditOneSubscriptionCard({subscriptionItem, deleteSubscription, updateSubscription }) {

    const [visitsNumber, setVisitsNumber] = useState(subscriptionItem.visitsNumber)
    const [endTime, setEndTime] = useState(subscriptionItem.endTime)

    const onSaveChangesClicked = () => {
        updateSubscription(subscriptionItem.id, visitsNumber, endTime);
    }

    const onDeleteClicked = () => {
        deleteSubscription(subscriptionItem.id)
    }

    return <div>
        <div className="user-subscription-block">
            <h3>Subscription:</h3>
            <p>Category: {subscriptionItem.subscription.category.name}</p>
            <p>Validity: {subscriptionItem.subscription.monthsDuration} month</p>
            <p>Visits: {subscriptionItem.subscription.visitsNumber} visits</p>
            <p>Start date: {subscriptionItem.startTime}</p>

        </div>
        <div className="left-user-subscription-block">
            <h3>Left visits: <input value={visitsNumber} onChange={e => setVisitsNumber(e.target.value)}/></h3>
            <h3>Expires on: <input value={endTime} onChange={e => setEndTime(e.target.value)}/></h3>
            <button className="inline-half-a-button" onClick={onSaveChangesClicked}>Save changes</button>
            <button className="inline-half-a-button" onClick={onDeleteClicked}>Delete</button>
        </div>
    </div>;
}