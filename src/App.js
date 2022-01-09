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
import jwtDecode from "jwt-decode";
import FindUser from "./components/administration/manageUserSubscription/FindUser";
import ManageUser from "./components/administration/manageUserSubscription/ManageUser";
import AddSubscription
    from "./components/administration/manageUserSubscription/options/AddSubscription/AddSubscription";

function clearToken() {
    localStorage.removeItem('token');
}

function App() {
    const { token, setToken, removeToken } = useToken();

    const isAdmin = token ? jwtDecode(token).role === 'ADMIN' : false;

    return (
        <BrowserRouter>
            <Header isLoggedIn={!!token} isAdmin={isAdmin}/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/subscription" element={<Subscription/>}/>
                <Route path="/my-subscription" element={token ? <PersonalSubscription token={token}/> : <Login setToken={setToken}/>}/>
                <Route path="/administration/edit-subscription" element={isAdmin ? <EditSubscription/> : 'You must be an admin to do that'}/>
                <Route path="/administration/manage-user-subscription" element={isAdmin ? <FindUser/> : 'You must be an admin to do that'}/>
                <Route path="/administration/manage-user/:userId" element={isAdmin ? <ManageUser token={token}/> : 'You must be an admin to do that'}/>
                <Route path="/administration/manage-user/add-subscription/:userId" element={isAdmin ? <AddSubscription token={token}/> : 'You must be an admin to do that'}/>
                <Route path="/administration" element={isAdmin ? <AdministrationHome/> : 'You must be an admin to do that'}/>
                <Route path="/login" element={<Login setToken={setToken}/>}/>
                <Route path="/sign-up" element={<Registration setToken={setToken}/>}/>
                <Route path="/logout" element={<Logout removeToken={removeToken}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );

}

export default App;
