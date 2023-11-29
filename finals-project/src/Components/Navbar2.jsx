import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar2.css';
import logo from './logo.svg'

export default function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-blue bg-body-tertiaryy navbar-left-align" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="logo-container">
            <img src={logo} className="d-block" style={{ width: '150px', height: '100px' }} alt="Slide 1" />
            <p className="smart-delivery-textM">Smart delivery</p>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style = {{marginLeft:'170px',marginTop:'50px'}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold text-dark" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="#">Services</a>
            </li>
        
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="#">Reviews</a>
            </li>

          </ul>
        </div>
        
      
      </div>
    </nav>
  );
}
