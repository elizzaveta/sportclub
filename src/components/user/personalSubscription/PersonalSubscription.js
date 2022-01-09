import React, {useState, useEffect} from "react";
import "./PersonalSubscription.css"
import {API} from "../../../index";
import QRCode from "react-qr-code";

export default function PersonalSubscription({token}) {

    //const [user, setUser] = useState(null)
    //const [subscriptions, setSubscriptions] = useState(null)
    const [userAndSubs, setUserAndSubs] = useState([])

    useEffect(() => {
        const fetchInfo = fetch(API + 'my-info', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(status)
            .then(json);

        const fetchSubscriptions = fetch(API + 'my-subscriptions', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(status)
            .then(json);

        Promise.all([fetchInfo, fetchSubscriptions]).then(result => {
            setUserAndSubs(result);
        });


    }, [token])

    return (
        <div className="content-wrapper">
            <UserDataCard user={userAndSubs[0]}/>
            <SubscriptionCards subscriptions={userAndSubs[1]}/>
        </div>
    )
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
            <QRCode value="1d18a927-137b-4dcf-ac75-768dc3465db7" bgColor="#e4faf7"/>
        </div>);
    } else return '';
}

function SubscriptionCards({ subscriptions }) {
    // <h1 className="center">My current subscription</h1>
    if (subscriptions && subscriptions.length > 0) {
        const container = [];

        subscriptions.forEach(subscription => {
            container.push(
                <div>
                    <div className="personal-subscription-block">

                        <h3>Subscription:</h3>
                        <p>Category: Individual training</p>
                        <p>Validity: 1 month</p>
                        <p>Visits: 12 visits</p>
                        <p>Start date: 01/01/2022</p>
                    </div>

                    <div className="left-subscription-block">
                        <h3>Left visits: 5</h3>
                        <h3>Expires on: 01/02/2022</h3>
                    </div>
                </div>
            );
        });

        return <div>{container}</div>;
    } else return <h2>You dont have active subscription yet</h2>;
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