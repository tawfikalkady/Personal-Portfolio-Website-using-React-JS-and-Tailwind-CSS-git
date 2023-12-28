
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'

function App() {

  return (
<>
<Navbar/>
{/* header is done now, next hero sectio */}
<Home/>
<Skills/>
<About/>
<Portfolio/>
<Testimonials/>
<Contact/>
<Footer/>

















































  {/* <div>
    <h1 className="text-3xl font-bold underline text-primary font-roboto">
          Hello world!
        </h1>
        our color setup is done
        now setup fonts
        so our font and color is now set up
  </div> */}



</>
  )
}

export default App
