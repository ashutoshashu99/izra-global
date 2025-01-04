import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import Section3 from './components/Section3';
import Query from './components/Query';
import RaiseQueryFullScreen from './components/RaiseQueryFullScreen ';
import AboutUs from './components/AboutUs';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/>
    <Hero/>
    <Section2/>
    <Query/>
    <Section3/>
    <Footer/> */}
    <Header/>
    {/* <RaiseQueryFullScreen/> */}
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default App
