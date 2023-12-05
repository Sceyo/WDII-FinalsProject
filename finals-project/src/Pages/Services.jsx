
import Navbar from '../Components/Navbar'
import './Services.css'
import delivery from '../Images/delivery.png'
import WDF from '../Images/laundry-basket.png'
import DC from '../Images/dry-cleaning.png'
import blanket from '../Images/blanket.png'

export default function Services(){

    return(
        <>
            <Navbar/>
 
                <div className ="firstS">
                    <h1>Our Laundry Services</h1>
               
                <h2>"Convenient, Reliable, Hassle-Free"</h2>
                </div>
                <div className = "secondS">
                <div className="secondTwo">
                    <h1>Our Services</h1>
                    <h2>What We Offer</h2>
                    <div class="black-card">
                    <div class = "cardbg">
                    <img src = {delivery} />
                    </div>
                    
                    <p class="background-text">Pickup & Delivery</p>
                    </div>
                    <div class="black-card">
                    <div class = "cardbg">
                    <img src = {WDF} />
                    </div>
                    
                    <p class="background-text">Wash, Dry & Fold</p>
                    </div>
                    <div class="black-card">
                    <div class = "cardbg">
                    <img src = {DC} />
                    </div>
                    <p class="background-text">Dry Cleaning</p>
                    </div>
                    <div class="black-card">
                    <div class = "cardbg">
                    <img src = {blanket} />
                    </div>
                    
                    <p class="background-text">Heavy Fabrics</p>
                    </div>
                    </div>
                <div className = "paraS">
                    
                </div>
      </div>      
          
        </>
    )

}