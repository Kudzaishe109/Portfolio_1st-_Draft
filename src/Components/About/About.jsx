import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="src\assets\ai_o_die.png" alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nihil rerum saepe sit ipsa ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nihil rerum saepe sit ipsa ea.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '75%'}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: '70%'}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width: '85%'}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: '70%'}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
