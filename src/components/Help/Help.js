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
        description="Complete domestic locksmith services nationwide; Including 24 hour emergency call-outs, 
        free home security assessments and home safe installations. Contact us for further information." 
        image={home}
        />
      </div>

      <div class="col-md-4 col-12">
      <HelpCards 
        title="Vehicle" 
        description="We operate a fast response roadside replacement vehicle key service. We can supply and program replacement keys to practically all vehicles without the need to tow. 
        Contact us for a quotation or advice on how we can replace your lost or stolen keys." 
        image={car}
        />
      </div>
      
      <div class="col-md-4 col-12">
      <HelpCards 
        title="Other" 
        description="We offer locksmith services for commercial premises, fleet locksmith services for vehicles, and commercial safes for cash / valuables. Contact us to book a free survey of your property and receive expert advice and recommendations." 
        image={other}
        />
      </div>

</div>
   </div>
   )
}
export default Help