import React from "react";
import Nav from "../components/Nav";
import Booking from "../components/Booking";

export default function Reservations({availableTimes}) {
    return(
        <div className="Reservations-container">
            <Nav />
            <Booking availableTimes={availableTimes}/>
        </div>
    )
};