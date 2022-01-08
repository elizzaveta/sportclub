import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {API} from "../../index";
import {useNavigate} from "react-router-dom";

async function loginUser(credentials) {
    return fetch(API + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.text())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
        navigate("/");
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}