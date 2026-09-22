import React from 'react'
import './About.css'


const About = () => {
  return (
    <div>
       <section className="about">
          <div className="about-text">
              <h4> About us</h4>
              <h2>building skills, <br/> building future</h2>
              <p>Learn fullstack cyber security and backkend development </p>
              <ul>
                  <li>
                      &#10004; practical hands-on learning
                  </li>
                  <li>
                      &#10004; Expert intructors
                  </li>
                  <li>
                      &#10004; Flexible Learning schedule
                  </li>
      
              </ul>
              <a href="#" class="btn">Learn more</a>
          </div>
          <div className="about-image">
              <img src="./src/assets/istockphoto-2105091005-612x612.webp" alt="student learning"/>
      
          </div>
          </section>
    </div>
  )
}

export default About
