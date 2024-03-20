import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from'./components/Footer'
import Header from'./components/Header'
import Main from'./components/Main'
import Nav from'./components/Nav'
import Testimonials from'./components/Testimonials'
import About from './components/About'
import Aboutpage from './pages/About-page'
import Contact from './pages/Contact';
import Menu from './pages/menu-page';
import Reservations from './pages/Reservations-page';
import { useState } from 'react';



function App() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00','18:00','19:00','20:00','21:00','22:00',
])
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations availableTimes={availableTimes} />} />
      </Routes>
    </BrowserRouter>  
)};

function HomePage() {
  return(
    <div className='Home-Page'>
        <Nav/>
        <Header/>
        <Main/>
        <Testimonials/>
        <About className="about-comp"/>
        <Footer/>
    </div>
  )
};

export default App;
