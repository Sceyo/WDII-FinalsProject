import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-blue bg-body-tertiaryy navbar-left-align" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>Company Name</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style = {{marginLeft:'170px',marginTop:'50px'}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold text-dark" aria-current="page" href="#">Home</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-bold text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"> Services1</a></li>
                <li><a className="dropdown-item" href="#"> Services2</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"> Services3</a></li>
              </ul>
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
        
        <div className = "userLog">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown" style={{ listStyleType: 'none' }}>
            <a className="nav-link dropdown-toggle fw-bold text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: '10px'}}>
              ENG
            </a>
            <ul className="dropdown-menu" style ={{minWidth:'80px'}}>
              <li><a className="dropdown-item" href="#">PH</a></li>
              <li><a className="dropdown-item" href="#">中文</a></li>
              <li><a className="dropdown-item" href="#">日本語</a></li>
            </ul>
          </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" aria-current="page" href="#">LOGIN</a>
            </li>
          </ul>
          <button type="button"  class="btn btn-secondary btn-sm" style={{marginLeft:'160px',marginTop: '-35px'}}>SIGN UP</button>
        </div>
      </div>
    </nav>
  );
}
