// libraries
import React from 'react'
import Button from '../Button/Button'
import OGform from '../OGform/OGform'
import './Header.css'

const Header = (props) => {
    return(
        
            <div  id="home">
                
                <div className ="row Header text-left">
                    <div className="col-lg-6 col-12 title">
                    <h1 className="display-4 headerTitle">Ireland's Leading Locksmith</h1><br/>
                    <h3 className="text-white">Complete locksmith services nationwide.</h3>
                    <div class="row">
                      <div class="col-lg-4 text-left col-md-4 col-12 m10">
                      <Button text="Make a Booking"/>
                      </div>
                        <div class="col-lg-4 text-left col-md-4 col-12 m10 ">
                        <Button text="Get a Quote"/>
                        </div>
                    </div>
                    
                    </div>
                    <div className="col-lg-6 col-12 title">
                    </div>
            </div>
                <OGform/>

            </div>
    )
}

export default Header;