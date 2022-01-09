import React, {useState, useEffect} from "react";
import UserInfo from "./UserInfo";
import UserSubscription from "./UserSubscription";
import {useParams} from "react-router-dom";
import ManageOptions from "./ManageOptions";

export default function ManageUser() {
    const {userId} = useParams()
    return (
        <div className="content-wrapper">
            <h1 className="center">Manage user</h1>
            <ManageOptions/>
            <UserInfo userId ={userId}/>
            <UserSubscription  userId ={userId}/>
        </div>
    )
}
