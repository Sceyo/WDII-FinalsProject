import logo from './logo.svg'
import './Footer2.css'

export default function Footer2(){

    return(
        <>
         <div className = "Footer">
            <div className = "Logo">
            <div className="container-with-position-relative">
            <img src={logo} className="d-block" style={{ width: '250px', height: '150px', position: 'absolute', top: '30px' }} alt="Slide 1" />
            </div>

            <div className="content">
                <div className="smart-delivery-text">
                    <p className="smart-delivery-text">Smart Delivery</p>
                </div>
                <div className="vertical-line"></div>
            </div>
            

            </div>  
             
            
        </div>      
        
        </>
    )
}