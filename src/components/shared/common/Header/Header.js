import React, {useState} from "react";
import "./Header.css"
import {Link} from "react-router-dom"

function Header(){
    const [isMobile, setIsMobile] = useState(false);
    window.addEventListener('resize', (e) => {setIsMobile(window.innerWidth < 991)})


    return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader(){
    return(
        <header>
            <div className="h-wrapper">
                <div className="left">
                    <div className="logo"></div>
                    <Link to="/" className="company-name link-router link-blue">SLH gym</Link>
                    <nav className="links">
                        <Link to="/blog" className="link-router link-blue">Blog</Link>
                        <Link to="/subscription" className="link-router link-blue">Subscription</Link>
                        <Link to="/administration" className="link-router link-blue">Administration</Link>
                    </nav>
                </div>

                <div className="log-in">Log in</div>
            </div>
        </header>
    )
}

function MobileHeader(){

    const [IfMenuOn, setIfMenuOn] = useState(false)

    let menu_details
    let menu_shadow

    if(IfMenuOn){
        menu_details = <div className="menu-details">
            <nav className="links-in-menu">
                <Link to="/blog" className="link-router link-dark" onClick={()=>setIfMenuOn(!IfMenuOn)}>Blog</Link>
                <Link to="/subscription" className="link-router link-dark" onClick={()=>setIfMenuOn(!IfMenuOn)}>Subscription</Link>
                <Link to="/about-us" className="link-router link-dark" onClick={()=>setIfMenuOn(!IfMenuOn)}>About us</Link>
            </nav>

            <div className="log-in">Log in</div>
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


export default Header