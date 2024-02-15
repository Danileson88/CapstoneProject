import './App.css';
import Footer from'./components/Footer'
import Header from'./components/Header'
import Main from'./components/Main'
import Nav from'./components/Nav'
import Testimonials from'./components/Testimonials'



function App() {
  return(
    <div className='Home-Page'>
      <Nav/>
      <Header/>
      <Main/>
      <Testimonials/>
      <Footer/>
    </div>
)}

export default App;
