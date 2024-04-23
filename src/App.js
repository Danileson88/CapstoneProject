import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Aboutpage from './pages/About-page';
import Contact from './pages/Contact';
import Menu from './pages/menu-page';
import Reservations from './pages/Reservations-page';
import Confirmedbooking from './pages/ConfirmedBooking';
import React, { useState, useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from './components/bookingAPI';

function App() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [dispatch, setDispatch] = useState(null);

 

  const initializeTimes = async () => {
    try {
      const today = new Date();
      const times = await fetchAPI(today);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error initializing times:", error);
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const updateTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error updating times:", error);
    }
  };

  const availabilityReducer = (state, action) => {
    if (!action || !action.type) {
      return state;
    }
  
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Return the updated state directly
        return updateTimes(action.payload.selectedDate);
      default:
        return state;
    }
  };
  

  const [state, stateDispatch] = useReducer(availabilityReducer, []);

  useEffect(() => {
    setDispatch(stateDispatch);
  }, [stateDispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={
          <Reservations
            availableTimes={availableTimes}
            dispatch={dispatch}
          />}/>
        <Route path='/confirmedBooking' element={<Confirmedbooking/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div className='Home-Page'>
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About className="about-comp" />
      <Footer />
    </div>
  );
}

export default App;
