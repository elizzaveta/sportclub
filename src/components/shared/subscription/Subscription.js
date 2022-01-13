import React, {useState, useEffect} from "react";
// import MyCalendar from "../SubscriptionTrack/Calendar"
import "./Subscription.css"
import {API} from "../../../index";


function Subscription() {

    const url = API + "subscriptions"
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
            <div className="s-wrapper">
                <h1 className="center">Subscription Prices</h1>
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
                    <div className="light-green-block">{subscriptionObject.individual.v8.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.individual.v8.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.individual.v8.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.individual.v8.m12.price} $</div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block">{subscriptionObject.individual.v10.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.individual.v10.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.individual.v10.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.individual.v10.m12.price} $</div>
                    <div className="gray-block">12 visits</div>
                    <div className="light-green-block">{subscriptionObject.individual.v12.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.individual.v12.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.individual.v12.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.individual.v12.m12.price} $</div>
                    <div className="gray-block">Unlimited</div>
                    <div className="light-green-block">{subscriptionObject.individual.unlimited.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.individual.unlimited.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.individual.unlimited.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.individual.unlimited.m12.price} $</div>
                </div>
                <div className="center activity-name">Training with a coach</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block">{subscriptionObject.coach.v8.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.coach.v8.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.coach.v8.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.coach.v8.m12.price} $</div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block">{subscriptionObject.coach.v10.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.coach.v10.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.coach.v10.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.coach.v10.m12.price} $</div>
                    <div className="gray-block">12 visits</div>
                    <div className="light-green-block">{subscriptionObject.coach.v12.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.coach.v12.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.coach.v12.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.coach.v12.m12.price} $</div>
                </div>
                <div className="center activity-name">Crossfit (groups of 2-4 people)</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block">{subscriptionObject.crossfit.v8.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.crossfit.v8.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.crossfit.v8.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.crossfit.v8.m12.price} $</div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block">{subscriptionObject.crossfit.v10.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.crossfit.v10.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.crossfit.v10.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.crossfit.v10.m12.price} $</div>
                    <div className="gray-block">Unlimited</div>
                    <div className="light-green-block">{subscriptionObject.crossfit.unlimited.m1.price} $</div>
                    <div className="medium-green-block">{subscriptionObject.crossfit.unlimited.m3.price} $</div>
                    <div className="dark-green-block">{subscriptionObject.crossfit.unlimited.m6.price} $</div>
                    <div className="darkest-green-block">{subscriptionObject.crossfit.unlimited.m12.price} $</div>
                </div>
                <div className="center activity-name">Personal coach</div>
                <div className="grid-1">
                    <div className="gray-block">8 visits</div>
                    <div className="light-green-block">{subscriptionObject.personal.v8.price} $</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="gray-block">10 visits</div>
                    <div className="light-green-block">{subscriptionObject.personal.v10.price} $</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="gray-block">Unlimited</div>
                    <div className="light-green-block">{subscriptionObject.personal.unlimited.price} $</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>


    }


    return (
        <div>
            {content}
        </div>
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

export function mapSubscriptionResponseIntoObject(subscriptionResponse) {
    let subscription =
        {
            individual: {
                v8: {
                    m1: 17,
                    m3: 45,
                    m6: 90,
                    m12: 178
                },
                v10: {
                    m1: 19,
                    m3: 49,
                    m6: 96,
                    m12: 191
                },
                v12: {
                    m1: 20,
                    m3: 53,
                    m6: 105,
                    m12: 209
                },
                unlimited: {
                    m1: 22,
                    m3: 59,
                    m6: 117,
                    m12: 231
                }
            },
            coach: {
                v8: {
                    m1: 28,
                    m3: 78,
                    m6: 155,
                    m12: 308
                },
                v10: {
                    m1: 33,
                    m3: 91,
                    m6: 182,
                    m12: 362
                },
                v12: {
                    m1: 35,
                    m3: 97,
                    m6: 193,
                    m12: 384
                }
            },
            crossfit: {
                v8: {
                    m1: 26,
                    m3: 71,
                    m6: 141,
                    m12: 281
                },
                v10: {
                    m1: 29,
                    m3: 81,
                    m6: 162,
                    m12: 322
                },
                unlimited: {
                    m1: 35,
                    m3: 100,
                    m6: 200,
                    m12: 398
                }
            },
            personal: {
                v8: 36,
                v10: 43,
                unlimited: 49
            }
        }
    subscriptionResponse.forEach(subscriptionItem => {
        if(subscriptionItem.category.name !== 'Personal coach' && subscriptionItem.monthsDuration!=null){
            subscription[translateResponseName(subscriptionItem.category.name)][translateVisitsName(subscriptionItem.visitsNumber)]['m' + subscriptionItem.monthsDuration] =
                {
                    id: subscriptionItem.subscriptionId,
                    price: subscriptionItem.price
                };
            console.log(translateResponseName(subscriptionItem.category.name) + ' ' + translateVisitsName(subscriptionItem.visitsNumber) + ' m' + subscriptionItem.monthsDuration)

        }
        else{
            subscription[translateResponseName(subscriptionItem.category.name)][translateVisitsName(subscriptionItem.visitsNumber)] =
                {
                    id: subscriptionItem.subscriptionId,
                    price: subscriptionItem.price
                };
            console.log(translateResponseName(subscriptionItem.category.name) + ' ' + translateVisitsName(subscriptionItem.visitsNumber))

        }
    })
    console.log(subscription);
    return subscription;
}

export function translateResponseName(field) {
    switch (field) {
        case 'Individual Training':
            return 'individual';
        case 'Training with a coach':
            return 'coach';
        case 'Crossfit (groups of 2-4 people)':
            return 'crossfit';
        case 'Personal coach':
            return 'personal';
        default:
            return '';
    }
}

export function translateVisitsName(field) {
    if (field == null)
        return 'unlimited';
    return 'v' + field;
}


export default Subscription