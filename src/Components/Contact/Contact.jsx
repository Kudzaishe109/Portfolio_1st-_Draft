import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contatct' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on a new project, so feel free to send a message about anything you want me to work on.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src="" alt="" /> <p>chikoworekudzaishe9@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src="" alt="" /> <p>+263 71 914 0434</p>
                    </div>
                    <div className="contact-detail">
                        <img src="" alt="" /> <p>Harare, Zimbabwe</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
