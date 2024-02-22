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




function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/contact' element={<Contact />} />
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
