import React, {useState, useEffect} from "react";
import UserInfo from "./UserInfo";
import UserSubscription from "./UserSubscription";
import {useParams} from "react-router-dom";
import ManageOptions from "./ManageOptions";

export default function ManageUser({token}) {
    const {userId} = useParams()
    return (
        <div className="content-wrapper">
            <h1 className="center">Manage user</h1>
            <ManageOptions/>
            <UserInfo userId ={userId} token={token}/>
            <UserSubscription  userId ={userId} token={token}/>
        </div>
    )
}
