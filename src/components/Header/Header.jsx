 
import React from 'react'
import  './Header.css'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div>
       <section>

    <section>
        <header>
            <div  className="nav-link-text">  <Link>Name</Link></div>
            <div className="nav-link-text" > <Link to="/About">About</Link></div>
            <div className="nav-link-text"> <Link to="/ContactUs">Contact</Link></div>
           <div className="nav-link-text"> <a href=""> services</a></div>

        </header>
    </section>
 
 
 </section>
    </div>
  )
}

export default Header
