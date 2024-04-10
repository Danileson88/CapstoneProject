import React from "react";
import Nav from "../components/Nav"
import Main from "../components/Main"

export default function Menu () {
    return(
        <div className="menu-page-container">
            < Nav />
            <section className="menu-section">
                <h1 className="menu-title">Menu</h1>
                <Main />
            </section>
        </div>
    )
};