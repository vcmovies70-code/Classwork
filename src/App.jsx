import React from 'react'
import cardimg from "./assets/istockphoto-2105091005-612x612.webp"

function App() {
  return (
    <div className ="App">
      
    <section>
        <header>
            <div  className="nav-link-text"> <a href="">Name</a></div>
            <div className="nav-link-text" > <a href="">About</a></div>
            <div className="nav-link-text"><a href="">Contact</a></div>
           <div className="nav-link-text"> <a href=""> services</a></div>

        </header>
    </section>
 <section className="hero">
    <div className="overlay">
        <div className="hero-content">
<h1>Welcome to my page</h1>
<p>Learn fullstac development, cyber security and backkend development at WOB</p>
<button className="button-1">Get Started</button>
        </div>
    </div>
 </section>
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
        <img src="./istockphoto-2105091005-612x612.webp" alt="student learning"/>

    </div>
    </section>
    <section className="testimonials">
        <h3> Testimonials</h3>
        <h2>Feedback from or students</h2>
        <div className="testimonial-container">
         <div className="card">
            <img src={cardimg} alt="{hge}"/>
            <h3> Amaka Chibihe</h3>
            <p>This academy completely changed my career, i was able to learn how to structure my code and give it a clear understanding </p>
         </div>  
          <div className="card">
            <img src="./istockphoto-2105091005-612x612.webp" alt="student image"/>
            <h3> Hope uzodinma</h3>
            <p>This academy completely changed my career, i was able to learn how to structure my code and give it a clear understanding</p>
         </div>   
          <div className="card">
            <img src="./istockphoto-2105091005-612x612.webp" alt="student image"/>
            <h3>Aliyu Garba</h3>
            <p>This academy completely changed my career, i was able to learn how to structure my code and give it a clear understanding</p>
         </div>    
            
        </div>
    </section>
    <section className="cta">
        <div className="cta-content">
            <h2>Ready to start your learning content</h2>
            <p>join us to start learning digital sill that can change your future</p>
            <a href="" class="cta-button"> Get Started</a>
        </div>
    </section>

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
            </div>class
            
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

export default App
