// rafce-cmf for faster response
import React from 'react'
import Home from './Home'
const style={
  backgroundColor:"orange",
  color:"white"
}
const Navbar = ({ obj }) => {
  return (
    <div className='navContainer' style={{ width: "400px", margin: "auto" }}>
      Navbar
      <h1 style={{ color: "pink", fontSize: "20px" }}>hello navbar !</h1>
      <h2 style={style}>hello internal</h2>

      <Home obj={obj} />
    </div>

  )
}
export default Navbar
