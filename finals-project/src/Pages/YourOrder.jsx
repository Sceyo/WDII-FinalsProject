import Head from '../Images/user.png'
import LG from '../Images/logout.png'
import Plus from '../Images/plus.png'
import Minus from '../Images/minus.png'
import './YourOrder.css'

export default function YourOrder(){

    return(
        <>
        <div className = "YOBody">
            <div className = "sidebar">
                <img src ={Head} style={{height:'60px', marginLeft: '35%', marginTop: '20%'}}/>
                <h2 style ={{color: 'white',marginLeft: '25%', fontSize: '20px', marginTop: '10px'}}>My Account</h2>
                    <div className = "PIBLink" style ={{marginTop: '50px'}}>
                        <ul>
                        <li><a href = "#" >Profile Information </a></li>
                        <li><a href = "#" >Order History</a></li>
                        <li><a href = "#" >Order Tracking </a></li>
                        <li><a href = "#" >Settings </a></li>
                        </ul>
                    </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <a href = "#" className ="LG" style ={{textDecoration: 'none',color: 'white',fontSize:'20px',fontWeight: 'bold',marginLeft:'55px'}}>LOGOUT <img src = {LG} style = {{height: '20px',marginTop:'-3px'}}/> </a>
            </div>
            <div className = "mainYO">
                <h2 className= "YOH2">Your Order</h2>
                <div className ="mainYO1" style={{ display: 'flex', gap: '159px',marginLeft: '65px', marginTop: '30px'}}>
                    <div class="mb-3" style={{width: '250px'}}>
                        <label for="exampleFormControlInput1" class="form-label">Items in Order:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" style ={{border: '2px solid black'}}/>
                        <button className="imageButton1"><img src={Plus} style={{ height: '25px',marginLeft: '250px',marginTop:'-70px' }} alt="Plus Icon" /></button>
                        <button className="imageButton1"><img src={Minus} style={{ height: '25px',marginLeft: '290px',marginTop:'-115px'  }} alt="Minus Icon" /></button>
                    </div>   
                    <div class="mb-3" style={{width: '150px'}}>
                        <label for="exampleFormControlInput1" class="form-label">Service Type</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" style ={{border: '2px solid black'}}/>
                    </div>
                </div>
                <div className ="mainYO2" style={{ display: 'flex', gap: '159px',marginLeft: '65px', marginTop: '-50px'}}>
                    <div class="mb-3" style={{width: '250px'}}>
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" style ={{border: '2px solid black'}}/>
                        <button className="imageButton1"><img src={Plus} style={{ height: '25px',marginLeft: '250px',marginTop:'-70px' }} alt="Plus Icon" /></button>
                        <button className="imageButton1"><img src={Minus} style={{ height: '25px',marginLeft: '290px',marginTop:'-115px'  }} alt="Minus Icon" /></button>
                   </div>   
                    <div class="mb-3" style={{width: '150px'}}>
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" style ={{border: '2px solid black'}}/>
                    </div>
                </div>  
            </div>
               
              
        
        </div>
        </>
    )
}