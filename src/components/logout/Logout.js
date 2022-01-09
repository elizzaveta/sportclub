export default function Logout({ removeToken }) {
    localStorage.removeItem('token');
    // removeToken(); that fails
    window.location.pathname = '/';
}