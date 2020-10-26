import React from 'react'
import HelpCards from '../HelpCards/HelpCards'
import './Help.css'
import home from '../../Images/homeIcon.png' 
import car from '../../Images/carIcon.png' 
import other from '../../Images/otherIcon.png' 

const Help = () =>  {

   return (
      <div className="help">

   <h1 className = "display-4 helpTitle">How Can We Help?</h1>
<div class="row">
      <div class="col-md-4 col-12">
      <HelpCards 
        title="Home" 
        description="Complete domestic locksmith services nationwide, including 24 hour emergency call-outs, free home 
                    security assessments and homesafe installations. Contact us for more information." 
        image={home}
        />
      </div>

      <div class="col-md-4 col-12">
      <HelpCards 
        title="Vehicle" 
        description="Complete domestic locksmith services nationwide, including 24 hour emergency call-outs, free home 
                    security assessments and homesafe installations. Contact us for more information." 
        image={car}
        />
      </div>
      
      <div class="col-md-4 col-12">
      <HelpCards 
        title="Other" 
        description="Complete domestic locksmith services nationwide, including 24 hour emergency call-outs, free home 
                    security assessments and homesafe installations. Contact us for more information." 
        image={other}
        />
      </div>

</div>
   </div>
   )
}
export default Help