import React from 'react'
import Skills from './Skills'

const About = ({obj}) => {
  return (
    <div>About
        <div>
            <h1>this is {obj.name} from about deeply nested</h1>
            <h3>age:{obj.age}</h3>
            <h5>adress details:dno{obj.address.dno}</h5>
            <h6>city:{obj.address.city}</h6>
        </div>
        <Skills/>
    </div>
  )
}

export default About