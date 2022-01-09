import React, {useState} from "react";
import "./Header.css"
import {Link} from "react-router-dom"

function Header({ isLoggedIn, isAdmin }){
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 991)})


    return isMobile ?
        <MobileHeader isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
        : <DesktopHeader isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
}

function DesktopHeader({ isLoggedIn, isAdmin }){
    return(
        <header>
            <div className="h-wrapper">
                <div className="left">
                    <div className="logo"></div>
                    <Link to="/" className="company-name link-router link-blue">SLH gym</Link>
                    <nav className="links">
                        <Link to="/blog" className="link-router link-blue">Blog</Link>
                        <Link to="/subscription" className="link-router link-blue">Subscription</Link>
                        <DesktopHeaderAdminControls isAdmin={isAdmin}/>
                    </nav>
                </div>

                <DesktopHeaderLoginControls isLoggedIn={isLoggedIn}/>


            </div>
        </header>
    )
}

function DesktopHeaderLoginControls({ isLoggedIn }) {
    if (isLoggedIn) {
        return  <Link to="/logout" className="link-router link-blue">Log out</Link>
    } else {
        return <div className="right">

            <Link to="/login" className="link-router link-blue">Log in</Link>
            <Link to="/sign-up" className="link-router link-blue">Sign up</Link>
        </div>
    }
}

function DesktopHeaderAdminControls({ isAdmin }) {
    if (isAdmin) {
        return <Link to="/administration" className="link-router link-blue">Administration</Link>;
    } else return '';
}

function MobileHeader({ isLoggedIn, isAdmin }){

    const [IfMenuOn, setIfMenuOn] = useState(false)

    let menu_details
    let menu_shadow

    const toggleMenu = () => {
        setIfMenuOn(!IfMenuOn)
    }

    if(IfMenuOn){
        menu_details = <div className="menu-details">
            <nav className="links-in-menu">
                <Link to="/blog" className="link-router link-dark" onClick={toggleMenu}>Blog</Link>
                <Link to="/subscription" className="link-router link-dark" onClick={toggleMenu}>Subscription</Link>
                <Link to="/about-us" className="link-router link-dark" onClick={toggleMenu}>About us</Link>
                <MobileHeaderAdminControls isAdmin={isAdmin} toggleMenu={toggleMenu}/>
                <MobileHeaderLoginControls isLoggedIn={isLoggedIn} toggleMenu={toggleMenu}/>
            </nav>
        </div>
        menu_shadow = <div className="menu-shadow" onClick={()=>setIfMenuOn(!IfMenuOn)}>

        </div>
    }

    return(
        <header>
            <div className="h-wrapper">
                <div className="left">
                    <div className="logo"></div>
                    <Link to="/" className="company-name link-router link-blue" onClick={()=>setIfMenuOn(false)}>SLH gym</Link>
                </div>

                <div className="menu" onClick={()=>setIfMenuOn(!IfMenuOn)}>---</div>
                {menu_details}
                {menu_shadow}
            </div>
        </header>
    )
}

function MobileHeaderLoginControls({ isLoggedIn, toggleMenu }) {
    if (isLoggedIn) {
        return  <Link to="/logout" className="link-router link-dark" onClick={toggleMenu}>Log out</Link>
    } else {
        return <div className="links-in-menu">

            <Link to="/login" className="link-router link-dark" onClick={toggleMenu}>Log in</Link>
            <Link to="/sign-up" className="link-router link-dark" onClick={toggleMenu}>Sign up</Link>
        </div>
    }
}

function MobileHeaderAdminControls({ isAdmin, toggleMenu }) {
    if (isAdmin) {
        return <Link to="/administration" className="link-router link-dark" onClick={toggleMenu}>Administration</Link>;
    } else return '';
}


export default Header