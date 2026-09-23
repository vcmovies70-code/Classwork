 import React from 'react'
 import './Testimonial.css'
 import chibuiheimg from "../../../assets/istockphoto-2105091005-612x612.webp"
 import hopeimg from "../../../assets/istockphoto-2105091005-612x612.webp"
 import aliyuimg from "../../../assets/istockphoto-2105091005-612x612.webp"

 
 const Testimonial = () => {
   return (
     <div>
       <section className="testimonials">
        <h3> Testimonials</h3>
        <h2>Feedback from or students</h2>
        <div className="testimonial-container">
         <div className="card">
            <img src={chibuiheimg} alt="/"/>
            <h3> Amaka Chibihe</h3>
            <p>This academy completely changed my career, i was able to learn how to structure my code and give it a clear understanding </p>
         </div>  
          <div className="card">
            <img src={hopeimg} alt="student"/>
            <h3> Hope uzodinma</h3>
            <p>This academy completely changed my career, i was able to learn how to structure my code and give it a clear understanding</p>
         </div>   
          <div className="card">
            <img src={aliyuimg} alt="student image"/>
            <h3>Aliyu Garba</h3>
            <p>This academy completely changed my career, i was able to learn how to structure my code and give it a clear understanding</p>
         </div>    
            
        </div>
    </section>
     </div>
   )
 }
 
 export default Testimonial
 