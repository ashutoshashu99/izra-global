import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Section2 from './components/Section2';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Section2/>
    </>
  )
}

export default App
