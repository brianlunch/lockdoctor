// libraries
import React from 'react'
import Header from '../components/Header/Header'
import Help from '../components/Help/Help'
import About from '../components/About/About'
import Nav from '../components/transparent-nav/Navbar'
import Footer from '../components/Footer/Footer'


const Home = (props) => {
    return(
        
            <div>
                <Nav/>
               <Header className="home"/>
               <Help className="help"/>
                <About/>
                <Footer/>
            </div>
    )
}

export default Home;