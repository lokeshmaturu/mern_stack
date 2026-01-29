import React from 'react'
import Text from './components/Text.jsx'
import "./App.css"
// import Navbar from './components/Navbar.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Skills from './components/Skills.jsx'
const App = () => {
  const obj = {
    name: "john",
    age: 23,
    address: {
      dno: 124,
      city: "hyderabad"
    }
  }
  return (

    <div>
      <h2>Provide Details Below</h2>
      <Text/>
      {/* <Navbar obj={obj} /> */}
      {/* <Home/>
      <About/>
      <Skills/> */}
    </div>
  )
}

export default App