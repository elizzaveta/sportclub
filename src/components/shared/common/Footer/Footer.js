import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <footer>
            <div className="f-wrapper">
                <ul className="f-links">
                    <li>Blog</li>
                    <li>Subscription</li>
                    <li>Coaches</li>
                    <li>About us</li>
                </ul>
                <ul className="f-links">
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Telegram</li>
                </ul>
                <ul className="f-links">
                    <li>Prices</li>
                    <li>Jobs</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer