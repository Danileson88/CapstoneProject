import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
    return(
        <header className="Header">
            <div className="header-text">
                <h1 className="header-title">Little Lemon</h1>
                <h2 className="header-city">Chicago</h2>    
                <h3 className="header-description">We are a Family owned Mediterranean
                restaurant, focused on traditional recipies
                served with a modern twist.
                </h3>
                <button className="Reserve-btn"><Link to="/reservations" className="reserve-link">Reserve a Table</Link></button>
            </div>
            <img src="images/Hero-image.png" className="Hero-img" alt="delicious-dish"/>
        </header>
    )
};