import React from "react";
import {Link} from "react-router-dom"

export default function AdministrationHome() {
    return (
        <div className="content-wrapper">
            <div className="button-wrapper">
                <div><Link to="/administration/edit-subscription">
                    <button className="green-max-width-button">Edit Subscription Prices</button>
                </Link>
                </div>
                <div className="button-wrapper">
                    <div>
                        <Link to="/administration/manage-user-subscription">
                            <button className="green-max-width-button">Manage User Subscription</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}