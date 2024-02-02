import React from "react"

export default function Nav() {
    return(
        <nav className="links">
            <img src="images/Logo.png" alt="little-lemon-logo" className="Logo"/>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Reservations</a>
                </li>
                <li>
                    <a>Order Online</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>            
        </nav>
    )
};