import Navbar from './Navbar'
import AboutBody from './AboutBody'
import Footer from './Footer'
import './About.css'

export default function About(){

    return(
        <>
            <Navbar/>
            <div className="first">
                <h1>We are Company Name</h1>
               
                <h2>"Freshness Delivered to Your Doorstep"</h2>
            </div>
            <div className = "Second">
                <AboutBody/>
                <Footer/>
            </div>
           
        </>

    )

}