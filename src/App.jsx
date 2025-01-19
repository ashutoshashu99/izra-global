import { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import ContactForm from './components/ContactForm';
import RaiseQueryFullScreen from './components/RaiseQueryFullScreen';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>    
    
    <Footer/>
    
    </>
  )
}

export default App
