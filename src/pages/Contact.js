import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return(
        <div className="contact-container">
            <h1 className="contact-h1">If you have any questions give us a call at <span className="contact-num">1-800-000-0000</span></h1>
            <h2><Link to='/' className="contact-link">Click Here to Return Home</Link></h2>
        </div>
    )
};
