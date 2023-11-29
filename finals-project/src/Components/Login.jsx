import './Login.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login(){

    return(
        <>
            <div className="container1">
                <div className = "logoSide">
                     <img src={logo} className="d-block1" style={{ width: '180px', height: '149px' }} alt="Slide 1" />
                     <h2>Smart Delivery</h2>
                     <hr className="blackLine" />
                     <p>"Freshness Delivered to Your Doorstep"</p>
                </div>
                <h1>Login</h1>
                <div class="mb-3 custom-width">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" style={{height:'58px'}}/>
                    </div>
                    <div class="mb-3 custom-width1">
                    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Password" style={{height:'58px'}}/>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input custom-checkbox" id="exampleCheck1" style ={{marginLeft: '50px',marginTop:'20px',height: '30px',width: '30px',color: 'black'}}/>
                        <label class="form-check-label custom-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm custom-button" style={{ width: '150px', height: '50px',marginLeft: '300px',marginTop: '-90px', fontWeight: 'bold', backgroundColor: '#CDC2AE', color: 'black', fontSize: '20px'}}>Login</button>
                <div className = "Lower">
                    <a href="#" class="btn-link">Don't have an account?</a>
                    <button type="button" class="btn btn-primary btn-sm custom-button" style={{ width: '280px', height: '50px',marginLeft: '200px',marginTop: '-110px', fontWeight: 'bold', backgroundColor: '#CDC2AE', color: 'black', fontSize: '20px'}}>Create an account</button>
                </div>
            </div>
        </>
    )

}