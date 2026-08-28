import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Nav from './Nav.jsx'
import Content from './Content.jsx'
import './App.css'
import data from './data.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav links={data.links}/> 
     <Content data={data}/>
    </>
  )
}

export default App
