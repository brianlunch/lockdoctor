import React from 'react'
import './HelpCards.css'

const HelpCards = ({title, description,image}) =>  {

   return (
      <div className="helpCard">
    <img  className="" src={image}/>
   <h4>{title}</h4>
   <p>{description}</p>
   </div>
   )
}
export default HelpCards