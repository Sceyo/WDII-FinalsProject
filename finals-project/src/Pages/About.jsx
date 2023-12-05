import Navbar from '../Components/Navbar'
import AboutBody from '../Components/AboutBody'
//import Footer from './Footer'
import './About.css'

export default function About(){

    return(
        <>
            {/* <Navbar/> */}
            <div className="first">
                <h1>We are Smart Delivery</h1>
               
                <h2>"Freshness Delivered to Your Doorstep"</h2>
            </div>
            <div className = "Second">
                <AboutBody/>
            </div>
            <div className = "third">
                <h1>What Sets us Apart</h1>
                <div className = "holdSymbol">
                    <div className='symbol'>
                        <h2>Quality</h2>
                    </div>
                    <div className='symbol'>
                        <h2>Convenience</h2>
                    </div>
                    <div className='symbol'>
                        <h2>Reliability</h2>
                    </div>
                    <div className='symbol'>
                        <h2>Innovation</h2>
                    </div>
                </div>
            </div>
            <div className="fourth">
                
            </div>
        </>

    )

}