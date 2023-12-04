import './Home.css';
import Navbar from '../Components/Navbar';
import home1 from '../Images/home1.png'
import home2 from '../Images/home2.png'
import home3 from '../Images/home3.png'

export default function Home() {
  return (
    <div className="body">
      <Navbar />
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={home1} className="d-block w-100" alt="Slide 1" />
            <h1 className="carousel-caption-text">"Freshness Delivered to <br/> Your Doorstep"</h1>
          </div>
          <div className="carousel-item">
            <img src={home2} className="d-block w-100" alt="Slide 2" />
            <h1 className="carousel-caption-text">"Freshness Delivered to <br/> Your Doorstep"</h1>
          </div>
          <div className="carousel-item">
            <img src={home3} className="d-block w-100" alt="Slide 3" />
            <h1 className="carousel-caption-text">"Freshness Delivered to <br/> Your Doorstep"</h1>
          </div>
    
        </div>
        <div className="carousel-controls-container">
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-icon" aria-hidden="true">&lt;</span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-icon" aria-hidden="true">&gt;</span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>



        
      </div>
    </div>
  );
}
