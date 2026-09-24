import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-container">
            <div className="footer-box">
                <h2>Our Digital Skill Academy</h2>
                <p>
                    empowering students with practical digital<br/> skill for a better future
                </p>
            </div>

            <div className="footer-box">
                <h3>Quick Links</h3>
                <a href="a">Home</a>
                <a href="a">About</a>
                <a href="a">Courses</a>
                <a href="a">Contact</a>
            </div>
            
            <div className="footer-box">
                <h3>Contact Us</h3>
                <p>Email:Victorwebsite@gmail.com</p>
                <p>Owerri, imo state</p>
             </div>

        </div>
         <div className="copyright">
                <p>&copy; 2026 our digital skill academy. All right reserved</p>

             </div>


    </section>

    </div>
  )
}

export default Footer
