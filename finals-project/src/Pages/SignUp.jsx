import './SignUp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyLogo from '../Images/logo.svg'
import apple from '../Images/apple.png'
import fb from '../Images/facebook.png'
import google from '../Images/google.png'


export default function SignUp(){

    const handleGoBack = () => {
        window.history.go(-1); // Go back to the previous page
    };


    return(
        <>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
        <div className ="SUBody">
            <div className = "logoSide">
                <br/>
            <a href="#" onClick={handleGoBack} style={{textDecoration: 'none',color: 'black',fontSize: '30px', marginLeft: '30px', marginTop: '20px'}}><i class="fas fa-arrow-left"></i> Back</a> 
                     <img src={CompanyLogo} className="d-block" style={{ width: '300px', height: 'auto',marginTop: '90px',marginLeft:'160px'}} alt="Slide 1" />
                     <h1>Smart Delivery</h1>
                     <hr className="blackLine" />
                     <p>"Freshness Delivered to Your Doorstep"</p>
                </div>
                <div className = "rightSide">
                    <h2>Enter your credentials here</h2>
                    <div class="mb-3 custom-width">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" style={{height:'58px'}}/>
                    </div>
                    <div class="mb-3 custom-width1">
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Password" style={{height:'58px'}}/>
                    </div>
                    <div class="mb-3 custom-width2">
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Confirm Password" style={{height:'58px'}}/>
                    </div>
                    <p>Or Continue With</p>
                    <img src={fb} alt="Facebook" style={{ width: '50px', height: '50px',marginLeft: '260px', marginTop: '-10px' }} />
                    <img src={google} alt="Facebook" style={{ width: '50px', height: '50px',marginLeft: '30px', marginTop: '-10px' }} />
                    <img src={apple} alt="Facebook" style={{ width: '50px', height: '50px',marginLeft: '30px', marginTop: '-10px' }} />
                    <button type="button" class="btn btn-primary btn-sm custom-button" style={{ width: '290px', height: '50px',marginLeft: '210px',marginTop: '40px', fontWeight: 'bold', backgroundColor: '#CDC2AE', color: 'black', fontSize: '20px'}}>Sign In</button>
                </div>
            </div>
        </>
    )
}