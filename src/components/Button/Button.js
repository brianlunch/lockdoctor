import React from 'react'
import './Button.css'

const Button = ({text, style}) =>  {

   return (
      <div>
   <button className="btn btn-warning btn-lg">{text}</button>
   </div>
   )
}
export default Button