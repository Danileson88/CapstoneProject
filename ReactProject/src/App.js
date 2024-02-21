import './App.css';
import Footer from'./components/Footer'
import Header from'./components/Header'
import Main from'./components/Main'
import Nav from'./components/Nav'
import Testimonials from'./components/Testimonials'
import About from './components/About'
import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About/>} />
        <Route />
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
