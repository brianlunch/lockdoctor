import React from 'react'

import ireland from '../../Images/irelandMap.png' 
import Button from '../Button/Button'
import './About.css'
const About = () =>  {

   return (
      <div className="about">
   <h1 className = "display-4 aboutTitle">About</h1>
<div class="row">
  <div class="col-md-6 col-12 text-left">
<p className="paraText">
Lock Doctor is Ireland’s premier Locksmith & Security Solutions supplier. We provide a 24 hour 
locksmith service nationwide across Ireland. As a result of a combined experience of over 20 years,  
Lock Doctor has earned a reputation for being a rapid response emergency locksmiths service.
<br/><br/> 
Most noteworthy, we specialise in skilful lock openings and offer a full range of other security 
services. Lock Doctor even offer free domestic security surveys  where we can advise you on how 
to improve the security of your home.
<br/><br/>
In conclusion, simply call our support team on 1850 555 000 for any help you need. Our experts 
are on hand around the clock to assist with all your locksmiths and security challenges.
</p>
  </div>
    <div class="col-md-6 col-12">
        <img src={ireland}/>
  
    </div>
</div>
  <div class="row justify-content-center buttonStyle col-12">
  <Button className =" w-100" text="Continue to Main Site"/>
  </div>


   </div>
   )
}
export default About