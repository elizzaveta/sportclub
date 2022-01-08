import React, {useEffect, useState} from "react";
// import MyCalendar from "../SubscriptionTrack/Calendar"
import "../../shared/subscription/Subscription.css"
import {mapSubscriptionResponseIntoObject} from "../../shared/subscription/Subscription";


export default function EditSubscription() {
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


    let content = null;
    if (subscription != null) {
        console.log(subscription);
        let subscriptionObject = mapSubscriptionResponseIntoObject(subscription);
        content =

            <div id="editDiv" className="s-wrapper">
                <h1 className="center">Edit Subscription Prices</h1>
                <div className="grid-1 bold">
                    <div className="left">Validity(month)</div>
                    <div>1</div>
                    <div>3</div>
                    <div>6</div>
                    <div>12</div>
                </div>
                <div className="center activity-name">Individual training</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.individual.v8.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.individual.v8.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.individual.v8.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.individual.v8.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.individual.v8.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.individual.v8.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.individual.v8.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.individual.v8.m12.price}/> $
                    </div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.individual.v10.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.individual.v10.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.individual.v10.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.individual.v10.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.individual.v10.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.individual.v10.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.individual.v10.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.individual.v10.m12.price}/> $
                    </div>
                    <div className="gray-block">12 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.individual.v12.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.individual.v12.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.individual.v12.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.individual.v12.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.individual.v12.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.individual.v12.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.individual.v12.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.individual.v12.m12.price}/> $
                    </div>
                    <div className="gray-block">Unlimited</div>
                    <div className="light-green-block"><input id={subscriptionObject.individual.unlimited.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.individual.unlimited.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.individual.unlimited.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.individual.unlimited.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.individual.unlimited.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.individual.unlimited.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.individual.unlimited.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.individual.unlimited.m12.price}/> $
                    </div>
                </div>
                <div className="center activity-name">Training with a coach</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.coach.v8.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.coach.v8.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.coach.v8.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.coach.v8.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.coach.v8.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.coach.v8.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.coach.v8.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.coach.v8.m12.price}/> $
                    </div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.coach.v10.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.coach.v10.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.coach.v10.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.coach.v10.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.coach.v10.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.coach.v10.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.coach.v10.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.coach.v10.m12.price}/> $
                    </div>
                    <div className="gray-block">12 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.coach.v12.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.coach.v12.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.coach.v12.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.coach.v12.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.coach.v12.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.coach.v12.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.coach.v12.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.coach.v12.m12.price}/> $
                    </div>
                </div>
                <div className="center activity-name">Crossfit (groups of 2-4 people)</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.crossfit.v8.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.crossfit.v8.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.crossfit.v8.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.crossfit.v8.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.crossfit.v8.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.crossfit.v8.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.crossfit.v8.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.crossfit.v8.m12.price}/> $
                    </div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.crossfit.v10.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.crossfit.v10.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.crossfit.v10.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.crossfit.v10.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.crossfit.v10.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.crossfit.v10.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.crossfit.v10.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.crossfit.v10.m12.price}/> $
                    </div>
                    <div className="gray-block">Unlimited</div>
                    <div className="light-green-block"><input id={subscriptionObject.crossfit.unlimited.m1.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.crossfit.unlimited.m1.price}/> $
                    </div>
                    <div className="medium-green-block"><input id={subscriptionObject.crossfit.unlimited.m3.id}
                                                               className="subscription-input id=subscriptionObject."
                                                               placeholder={subscriptionObject.crossfit.unlimited.m3.price}/> $
                    </div>
                    <div className="dark-green-block"><input id={subscriptionObject.crossfit.unlimited.m6.id}
                                                             className="subscription-input id=subscriptionObject."
                                                             placeholder={subscriptionObject.crossfit.unlimited.m6.price}/> $
                    </div>
                    <div className="darkest-green-block"><input id={subscriptionObject.crossfit.unlimited.m12.id}
                                                                className="subscription-input id=subscriptionObject."
                                                                placeholder={subscriptionObject.crossfit.unlimited.m12.price}/> $
                    </div>
                </div>
                <div className="center activity-name">Personal coach</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.personal.v8.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.personal.v8.price}/> $
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block"><input id={subscriptionObject.personal.v10.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.personal.v10.price}/> $
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="gray-block">Unlimited</div>
                    <div className="light-green-block"><input id={subscriptionObject.personal.unlimited.id}
                                                              className="subscription-input id=subscriptionObject."
                                                              placeholder={subscriptionObject.personal.unlimited.price}/> $
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <button className="green-max-width-button" onClick={onSaveClick}>Save</button>
            </div>
    }

    return (
        <div>{content}</div>
    )

}


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

function onSaveClick(){
    let inputs = document.getElementById('editDiv').getElementsByTagName('input')
    for(let i = 0; i<inputs.length; i++){
        let inputElem = inputs[i];
        if(Number.parseInt(inputElem.value)){
            alert('i will edit ' + inputElem.value)
            let subscriptionItem = [{
                subscriptionId: inputElem.id,
                price: inputElem.value
            }]
            let json = JSON.stringify(subscriptionItem)
            put(`http://localhost:8080/subscriptions`, json);
        }
    }
}
function put(url, body){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: body
    };
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}