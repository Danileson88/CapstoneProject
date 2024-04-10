import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { submitAPI } from "../components/bookingAPI";

export default function Reservations({availableTimes,dispatch,submitBooking}) {
    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        if (dispatch) {
          dispatch({ type: 'UPDATE_TIMES', payload: { selectedDate } });
        }
      };
      
      
        const [date, setDate] = useState('');
        const [time, setTime] = useState('');
        const [guest, setGuest] = useState('');
        const [occasion, setOccasion] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault()
            submitBooking()
        }
    return(
        <div className="Reservations-container">
            <Nav />
            <div className="Booking-div">
            <form className="booking-container" onSubmit={handleSubmit}>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res-date' value={date} onChange={e => setDate(e.target.value)}/>
            <label htmlFor='res-time'>Choose time</label>
            <select value={time} onChange={handleDateChange} >
            {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
                ))}   
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={e => setGuest(e.target.value)}/>
            <label htmlFor="occasion" value={occasion}>Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">Submit</button>
        </form>
            </div>
        </div>
    )
};