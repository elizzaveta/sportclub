import React, {useState, useEffect} from "react";
import {API} from "../../../index";

export default function UserInfo({userId, token}) {
    const [userInfo, setUserInfo] = useState({
        info: null,
        loading: true
    })

    useEffect(() => {
        fetch(API + 'users/'+userId, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(status)
            .then(json)
            .then(response => {
                setUserInfo({
                    info: response,
                    loading: false
                })
                console.log(response)
            });
    }, [token, userId])

    let content = (userInfo.loading)
        ? <h2>Loading</h2>
        :
        <div >
            <h2>User Info:</h2>
            <p>First name: {userInfo.info.firstName}</p>
            <p>Last name: {userInfo.info.lastName}</p>
            <p>Phone Number: {userInfo.info.phone}</p>
            <p>Birthday: {userInfo.info.birthday}</p>
            <p>Email: {userInfo.info.email}</p>
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