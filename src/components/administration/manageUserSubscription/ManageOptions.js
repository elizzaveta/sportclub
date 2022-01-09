import React from "react";
import {Link} from "react-router-dom";

export default function ManageOptions({userId}) {
    return (
        <div className="inline-button-wrapper">
            <button className="inline-button"><Link to={"/administration/manage-user/"+userId}>See User Info</Link></button>
            <button className="inline-button"><Link to={"/administration/manage-user/add-subscription/"+userId}>Add Subscription</Link></button>
            <button className="inline-button"><Link to={"/administration/manage-user/mark-visit/"+userId}>Mark User Visit</Link></button>
            <button className="inline-button"><Link to={"/administration/manage-user/edit-subscription/"+userId}>Edit Subscription</Link></button>
        </div>
    )
}
