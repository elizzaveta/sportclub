import {useNavigate} from "react-router-dom";

export default function Logout({ removeToken }) {
    localStorage.removeItem('token');
    // removeToken(); that fails
    const nav = useNavigate();
    nav('/');
}