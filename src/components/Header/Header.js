// libraries
import React from 'react'
import Button from '../Button/Button'
import OGform from '../OGform/OGform'
import './Header.css'

const Header = (props) => {
    return(
        
            <div  id="home">
                
                <div className ="row Header text-left">
                    <div className="col-lg-8 col-12 title">
                    <h1 className="display-3 headerTitle">Ireland's Leading Locksmiths</h1><br/>
                    <h4 className="text-white">Ireland’s trusted brand, providing fast response nationwide services to Home, Business, Automobile and Commercial customers. <br/><br/>We have retail shops in Dublin, Limerick, Galway and Waterford.</h4>
                    
                    
                    </div>
                    <div className="col-lg-6 col-12 ">
                    </div>
            </div>
                

            </div>
    )
}

export default Header;