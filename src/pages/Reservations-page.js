import React, { useState } from "react";
import Nav from "../components/Nav";
import { submitAPI } from "../components/bookingAPI";
import { useNavigate } from "react-router-dom";

export default function Reservations({ availableTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState('');
  const [occasion, setOccasion] = useState('');
  const [bookedTimes, setBookedTimes] = useState([]);
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time, guest, occasion };
    const success = await submitAPI(formData);
    if (success) {
      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      const newBooking = { date, time, guest, occasion };
      localStorage.setItem('bookings', JSON.stringify([...bookings, newBooking]));
      setDate('');
      setTime('');
      setGuest('');
      setOccasion('');
      navigate('/confirmedBooking');
    } else {
      alert('Failed')
    }
  };
  

  const filteredTimes = availableTimes.filter(availTime => {
    const bookedTimesFromStorage = JSON.parse(localStorage.getItem('bookings')) || [];
    return !bookedTimesFromStorage.some(bookedTime => bookedTime.date === date && bookedTime.time === availTime);
  });
  
  

  return (
    <div className="Reservations-container">
      <Nav />
      <div className="Booking-div">
        <form className="booking-container" onSubmit={handleSubmit}>
          <label htmlFor='res-date'>Choose date</label>
          <input type='date' id='res-date' required value={date} onChange={handleDateChange} />
          <label htmlFor='res-time'>Choose time</label>
          <select value={time} onChange={handleTimeChange} required>
            {filteredTimes.map((availTime, index) => (
              <option key={index} value={availTime}>{availTime}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={e => setGuest(e.target.value)}
          required/>
          <label htmlFor="occasion" value={occasion}>Occasion</label>
          <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option required>Birthday</option>
            <option required>Anniversary</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

module = Reservations