import {Navigate} from "react-router-dom";

export default function Logout({ removeToken }) {
    localStorage.removeItem('token');
    removeToken();
    return <Navigate to={"/"}/>;
}