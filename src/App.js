import './App.css';
import Header from "./components/shared/common/Header/Header";
import Footer from "./components/shared/common/Footer/Footer";
import Landing from "./components/shared/landing/Landing";
import Subscription from "./components/shared/subscription/Subscription";
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import PersonalSubscription from "./components/user/personalSubscription/PersonalSubscription";
import EditSubscription from "./components/administration/subscription/EditSubscription";
import AdministrationHome from "./components/administration/home/AdministrationHome";
import Login from "./components/login/Login";
import useToken from "./useToken";
import Registration from "./components/registration/Registration";
import Logout from "./components/logout/Logout";

function clearToken() {
    localStorage.removeItem('token');
}

function App() {
    const { token, setToken } = useToken();

    //if(!token) {
     //   return <Login setToken={setToken} />
    //}

    // rendering the login page instead of

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/subscription" element={<Subscription/>}/>
                <Route path="/my-subscription" element={token ? <PersonalSubscription token={token}/> : <Login setToken={setToken}/>}/>
                <Route path="/administration/edit-subscription" element={token ? <EditSubscription/> : <Login setToken={setToken}/>}/>
                <Route path="/administration" element={token ? <AdministrationHome/> : <Login setToken={setToken}/>}/>
                <Route path="/login" element={<Login setToken={setToken}/>}/>
                <Route path="/sign-up" element={<Registration setToken={setToken}/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );

}

export default App;
