import './SignUp.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import apple from './apple.png'
import fb from './facebook.png'
import google from './google.png'

export default function SignUp(){

    return(
        <>
       
            <div className="container">
                <div className = "logoSide">
                     <img src={logo} className="d-block" style={{ width: '230px', height: '209px' }} alt="Slide 1" />
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
                    <img src={fb} alt="Facebook" style={{ width: '50px', height: '50px',marginLeft: '170px', marginTop: '-10px' }} />
                    <img src={google} alt="Facebook" style={{ width: '50px', height: '50px',marginLeft: '30px', marginTop: '-10px' }} />
                    <img src={apple} alt="Facebook" style={{ width: '50px', height: '50px',marginLeft: '30px', marginTop: '-10px' }} />
                    <button type="button" class="btn btn-primary btn-sm custom-button" style={{ width: '290px', height: '50px',marginLeft: '130px',marginTop: '40px', fontWeight: 'bold', backgroundColor: '#CDC2AE', color: 'black', fontSize: '20px'}}>Sign In</button>
                </div>
            </div>   
        </>
    )
}