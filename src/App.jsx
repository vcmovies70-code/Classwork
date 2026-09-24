import React from 'react'
import LandingPageSreen from './Screen/LandingPageSreen'
import { Route,Routes } from 'react-router-dom'
import ContactUs from './Screen/ContactUs'
import About from './Screen/About'
import Header from './components/Header/Header'
import Services from './Screen/Services.jsx'
import Footer from './components/Header/Footer/Footer.jsx'






function App() {
  return (
    <div>
      <Header/>
      
      
   <Routes>
    <Route path='/' element= {<LandingPageSreen/>}/>
    <Route path='ContactUs' element= {<ContactUs/>}/>
    <Route path='About' element= {<About/>}/>
    <Route path='Services' element= {<Services/>}/>
    
    
   </Routes>
    

    

<Footer/>

  



    </div>
  )
}

export default App
