import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import TeamSection from "./components/TeamSection/TeamSection"
import AboutSection from "./components/AboutSection/AboutSection"
import AboutTherapyRoom from './components/AboutTherapyRoom/AboutTherapyRoom'
import FAQ from "./components/FAQ/FAQ";
import Event from "./components/Event/Event";
import ContactUs from './components/ContactUs/ContactUs'
import Footer from "./components/Footer/Footer";

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <TeamSection/>
      <AboutSection/>
      <AboutTherapyRoom/>
      <FAQ/>
      <Event/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
