import './App.css';
import Header from "./components/shared/common/Header/Header";
import Footer from "./components/shared/common/Footer/Footer";
import Landing from "./components/shared/landing/Landing";
import Subscription from "./components/shared/subscription/Subscription";
import React, { useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import PersonalSubscription from "./components/user/personalSubscription/PersonalSubscription";
import EditSubscription from "./components/administration/subscription/EditSubscription";
import AdministrationHome from "./components/administration/home/AdministrationHome";
import Login from "./components/login/Login";

function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/subscription" element={<Subscription/>}/>
                <Route path="/my-subscription" element={<PersonalSubscription/>}/>
                <Route path="/administration/edit-subscription" element={<EditSubscription/>}/>
                <Route path="/administration" element={<AdministrationHome/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );

}

export default App;
