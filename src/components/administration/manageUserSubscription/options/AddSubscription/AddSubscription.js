import React, {useState, useEffect} from "react";
import {API} from "../../../../../index";
import {useParams} from "react-router-dom";

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
        <div>
            <div>
                <h2>Choose Subscription</h2>
                <p>{subscription[0].subscriptionId}</p>
                <form>
                    <label htmlFor="cars">Choose a car:</label>
                    <select name="cars" id="cars">
                        {subscription.map(subscriptionItem =>
                            <option
                                value={subscriptionItem.subscriptionId}>{subscriptionItem.category.name + ' monthsDuration:' + subscriptionItem.monthsDuration + ' visitsNumber:' + subscriptionItem.visitsNumber + ' price:' + subscriptionItem.price}</option>
                        )}
                    </select>
                    <input type="submit" value="Submit"/>
                </form>


            </div>
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