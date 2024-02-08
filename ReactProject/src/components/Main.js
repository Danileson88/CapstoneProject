import React from "react";

export default function Main() {
    return(
        <main className="Main">
            <div className="main-title">
                <h1 className="main-specials-txt">This Weeks Specials!</h1>
                <button className="main-menu-btn" >online Menu</button>
            </div>
            <div className="main-card">
                <div className="card-1">
                    <img className="greeksalad-img" src="images/Greek-salad.png"/>
                    <h2>Greek Salad <span className="cost">12.99</span></h2>
                </div>
                <div className="card-2">
                    <img className="bruschetta-img" src="images/Bruschetta.png" alt="Bruschetta dish"/>
                </div>
                <div className="card-3">
                    <img className="dessert-img" src="images/Lemon-dessert.png" alt="a slice of lemon dessert"/>
                </div>                
            </div>                
        </main>
    )
};