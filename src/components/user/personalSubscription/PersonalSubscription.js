import React, {useEffect, useState} from "react";
import "./PersonalSubscription.css"
import QRCode from "react-qr-code";
import SubscriptionInfoCards from "../../shared/subscription-info-cards/SubscriptionInfoCards";
import {requestJson} from "../../../requests";

export default function PersonalSubscription({token}) {

    //const [user, setUser] = useState(null)
    //const [subscriptions, setSubscriptions] = useState(null)
    const [userAndSubs, setUserAndSubs] = useState([])

    useEffect(() => {
        const fetchInfo = requestJson('my-info', 'GET', token)

        const fetchSubscriptions = requestJson('my-subscriptions', 'GET', token);

        Promise.all([fetchInfo, fetchSubscriptions]).then(result => {
            setUserAndSubs(result);
        });

    }, [token])

    if (userAndSubs[0]) {
        return (
            <div className="content-wrapper">
                <UserDataCard user={userAndSubs[0]}/>
                <SubscriptionCards subscriptions={userAndSubs[1]}/>

            </div>
        )
    } else return <div className="content-wrapper">Loading...</div>
}

function UserDataCard({ user }) {
    if (user) {
        return (<div className="user-details-block">
            <div >
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
                <p>Phone Number: {user.phone}</p>
                <p>Birthday: {user.birthday}</p>
                <p>Email: {user.email}</p>
            </div>
            <QRCode value={user.userId} bgColor="#e4faf7"/>
        </div>);
    } else return '';
}

function SubscriptionCards({ subscriptions }) {
    // <h1 className="center">My current subscription</h1>
    if (subscriptions && subscriptions.length > 0) {
        return <SubscriptionInfoCards subscriptions={subscriptions}/>;
    } else return <h2>You dont have active subscription yet</h2>;
}
