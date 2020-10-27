// libraries
import React from 'react'
import Header from '../components/Header/Header'
import Help from '../components/Help/Help'
import About from '../components/About/About'
import Nav from '../components/transparent-nav/Navbar'
import Footer from '../components/Footer/Footer'
import OGform from '../components/OGform/OGform'


const Home = (props) => {
    return(
        
            <div>
                <Nav/>
               <Header className="home"/>
               
               <Help className="help"/>
               <OGform className="contact"/>
                <About/>
                <Footer/>
            </div>
    )
}

export default Home;