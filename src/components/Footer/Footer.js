import React from 'react'
import './Footer.css'
import logo from '../../Images/Logo_transparent.png';

const Footer = ({text, style}) =>  {

   return (
      <div className="footer">
   <div class="row justify-content-center text-left">
     
     
      <div class="col-md-3">
    
      </div>
       <div class="col-md-3  text-center">
     <img src={logo}/>
       </div>
       <div class="col-md-3 text-center">
    
    <ul>
        
    </ul>
    </div>
         
   </div>
   </div>
   )
}
export default Footer