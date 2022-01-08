import {Navigate} from "react-router-dom";

export default function Logout({ removeToken }) {
    localStorage.removeItem('token');
    // removeToken(); that fails
    return <Navigate to={"/"}/>;
}