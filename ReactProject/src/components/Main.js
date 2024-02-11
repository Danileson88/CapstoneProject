import React from "react";

export default function Main() {
    return(
        <main className="Main">
            <div className="main-title">
                <h1 className="main-specials-txt">This Weeks Specials!</h1>
                <button className="main-menu-btn" >online Menu</button>
            </div>
            <div className="grid-card">
                <div className="card-1">
                    <img className="greeksalad-img" src="images/Greek-salad.png"/>
                    <div className="card-details">
                        <h2>Greek Salad</h2>
                        <p>$12.99</p>
                        <p className="card-text">The famous greek salad of crispy lettuce,
                            peppers, Olives and our Chicago style feta
                            cheese,garnishd with crucny garlic and rosemary
                            croutons.
                        </p>
                        <h3>Order Delivery</h3>
                        <img className="delivery-icon" src="images/delivery-icon.png" alt="delivery-icon"/>
                    </div>    
                </div>
                <div className="card-2">
                    <img className="bruschetta-img" src="images/Bruschetta.png" alt="Bruschetta dish"/>
                    <div className="card-details">
                        <h2>Bruschetta</h2>
                        <p>$12.99</p>
                    </div>
                </div>
                <div className="card-3">
                    <img className="dessert-img" src="images/Lemon-dessert.png" alt="a slice of lemon dessert"/>                
                    <div className="card-details">
                        <h2>Lemon Cake</h2>
                        <p>$12.99</p>
                    </div>
                </div>
            </div>                
        </main>
    )
};