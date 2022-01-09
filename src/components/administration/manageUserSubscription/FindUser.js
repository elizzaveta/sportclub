import React, {useState, useEffect} from "react";
import {API} from "../../../index";
import {Navigate, useNavigate} from 'react-router-dom';
import ManageUser from "./ManageUser";



export default function FindUser() {
    const [userId, setUserId] = useState();
    const navigate = useNavigate();

    return (
        <div className="content-wrapper">
            <h1 className="center">Find User</h1>
            <form onSubmit={()=>navigate("/administration/manage-user/"+userId)}>
                <label>
                    <label>Enter or scan user card id:</label>
                    <input  className="login-input"  onChange={e => setUserId(e.target.value)} />
                </label>
                <div>
                    <button className="green-max-width-button" type="submit">Find user</button>
                </div>

            </form>
        </div>
    )
}

