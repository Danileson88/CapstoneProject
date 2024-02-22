import React from "react"
import {Link} from "react-router-dom"

const routes = [
    {path: "/", name: "Home"},
    {path: "/about", name: "About"},
    {path: '/contact', name: "Contact"},
    { path: '/menu', name: 'Menu' },
    { path: '/reservations', name: 'Reservations' },
    { path: '/order', name: 'Order Online' },
    { path: '/login', name: 'Login' }
];

export default function Nav() {
    return(
        <nav className="links">
            <img src="images/Logo.png" alt="little-lemon-logo" className="Logo"/>
            <ul className="nav-ul">
                    {routes.map(item => 
                        <li key={item.path}>
                            <Link to={item.path} className="nav-links">{item.name}</Link>
                        </li>
                    )}
            </ul>   
        </nav>
    )
};