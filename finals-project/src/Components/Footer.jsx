import fb from './fb.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import './Footer.css'

export default function Footer(){

    return(
        <>
  <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <h1>Logo</h1>
      </a>
      <p class="text-body-secondary">&copy; 2023</p>
    </div>

    <div class="col mb-3">
      
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About Us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Careers</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact Us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
      </ul>
    </div>
    <div class ="socialMedia">
        <h5>Social Media</h5>
        <img src={fb} alt="Facebook Logo" width="40" height="40" style={{ marginRight: '10px' }}/>
        <img src={twitter} alt="twitter" width="40" height="40" style={{ marginRight: '10px' }}/>
        <img src={linkedin} alt="linkedin" width="40" height="40" style={{ marginRight: '10px' }}/>
        <img src={instagram} alt="insta" width="40" height="40" style={{ marginRight: '10px' }}/>
    </div>
    <div class = "newsletter">
         <h5>Newsletter</h5>
         <p>Subscribe To Get Latest Updates</p>
         <button type="button" class="btn btn-secondary btn-sm" style = {{marginTop: '0px'}}>Live Chat</button>
    </div>
  </footer>
</div>
        
        
        
        </>
    )

}