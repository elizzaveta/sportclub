import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {API} from "../../index";
import {useHistory, useNavigate} from "react-router-dom";

async function registerUser(credentials) {
    return fetch(API + 'users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.text())
}

export default function Registration({ setToken }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await registerUser({
            firstName,
            lastName,
            phone,
            email,
            birthday,
            password
        });
        setToken(token);
        navigate("/")
    }

    return(
        <div className="login-wrapper">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <label>First name</label>
                    <input className="login-input"  required="required"  type="text" onChange={e => setFirstName(e.target.value)} />
                </label>
                <label>
                    <label>Last name</label>
                    <input className="login-input"  required="required"  type="text" onChange={e => setLastName(e.target.value)} />
                </label>
                <label>
                    <label>Phone</label>
                    <input className="login-input"  required="required"  type="text" onChange={e => setPhone(e.target.value)} />
                </label>
                <label>
                    <label>Email</label>
                    <input className="login-input"  required="required"  type="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <label>Birthday</label>
                    <input className="login-input"  required="required"  type="date" onChange={e => setBirthday(e.target.value)} />
                </label>
                <label>
                    <label>Password</label>
                    <input className="login-input"  required="required"  type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button className="green-max-width-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Registration.propTypes = {
    setToken: PropTypes.func.isRequired
}