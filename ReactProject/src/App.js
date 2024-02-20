import './App.css';
import Footer from'./components/Footer'
import Header from'./components/Header'
import Main from'./components/Main'
import Nav from'./components/Nav'
import Testimonials from'./components/Testimonials'
import About from './components/About'



function App() {
  return(
    <div className='Home-Page'>
      <Nav/>
      <Header/>
      <Main/>
      <Testimonials/>
      <About/>
      <Footer/>
      <p>hello</p>
    </div>
)}

export default App;
