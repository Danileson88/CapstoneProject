import React, { useState, useEffect } from "react"
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

    const [navopen, setNavOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setNavOpen(true);
            } else {
                setNavOpen(false); 
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <nav className="links">
            <div className="nav-images">
                <img src="images/Logo.png" alt="little-lemon-logo" className="Logo"/>
                <img src="images/burger-menu.png" className="burger-menu" alt="menu-icon" 
                onClick={() => setNavOpen(!navopen)} />
            </div>
            { navopen && (
            <ul className="nav-ul">
                    {routes.map(item => 
                        <li key={item.path}>
                            <Link to={item.path} className="nav-links">{item.name}</Link>
                        </li>
                    )}
            </ul>
            )}   
        </nav>
    )
};