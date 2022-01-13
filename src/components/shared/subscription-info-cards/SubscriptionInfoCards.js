import React from "react";
import './SubscriptionInfoCards.css';

export default function SubscriptionInfoCards({ subscriptions }) {
    if (!subscriptions) return null;

    return <div>{subscriptions.filter(item => item.visitsNumber > 0).map(subscriptionItem =>
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
    )}</div>
}