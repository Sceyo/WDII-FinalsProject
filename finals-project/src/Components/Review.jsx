import Navbar from './Navbar'
import Footer from './Footer'
import Carousel from './Carousel'
import './Review.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="first">
                <h1>We are Company Name</h1>
               
                <h2>"Freshness Delivered to Your Doorstep"</h2>
            </div>

            <div className = "carousell">
                <Carousel/>
            </div>
            <Footer/>
        </>
    );
};
