import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" />
                <p>I am  backend developer from Harare Zimbabwe</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="" alt="" />
                    <input type="text" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@2025 Kudzaishe Chikowore. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
