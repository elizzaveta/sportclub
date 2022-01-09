import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {API} from "../../index";
import {useNavigate} from "react-router-dom";
import "./Login.css"

async function loginUser(credentials) {
    return fetch(API + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }).then(data => data.text())
}

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = await loginUser({
                email,
                password
            });

            setToken(token);
        } catch (e) {
            console.log('error wrong credentials');
        }
        navigate("/");
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <label>Email</label>
                    <input className="login-input" type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <label>Password</label>
                    <input  className="login-input" type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button className="green-max-width-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}