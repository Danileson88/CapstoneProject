import React, { useState } from "react";

export default function Booking({availableTimes}) {
    
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guest, setGuest] = useState('');
    const [occasion, setOccasion] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <form className="booking-container" onSubmit={handleSubmit}>
            <label htmlFor='res-date'>Choose date</label>
            <input type='date' id='res=date' value={date} onChange={e => setDate(e.target.value)}/>
            <label htmlFor='res-time'>Choose time</label>
            <select value={time} onChange={e => setTime(e.target.value)} >
                {availableTimes.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
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
    )
};