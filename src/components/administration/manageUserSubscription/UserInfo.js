import React, {useState, useEffect} from "react";
import {API} from "../../../index";

export default function UserInfo({userId}) {
    const [userInfo, setUserInfo] = useState({
        info: null,
        loading: true
    })

    // !!
    // here will be getting user info (first name, etc )

    // useEffect(() => {
    //     fetch(API + 'user-subscriptions', {
    //         mode: 'cors',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Authorization': `Bearer ${token}`,
    //         }
    //     })
    //         .then(status)
    //         .then(json)
    //         .then(response => {
    //             setUserInfo({
    //                 info: response,
    //                 loading: false
    //             })
    //             console.log(response)
    //         });
    // }, [token])

    // make dynamic after implementing fetch
    let content = (false)
        ? <h2>Loading</h2>
        :
        <div >
            <h2>User Info:</h2>
            <p>First name: {'David'}</p>
            <p>Last name: {'Smith'}</p>
            <p>Phone Number: {'phone'}</p>
            <p>Birthday: {'b-day'}</p>
            <p>Email: {'email'}</p>
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