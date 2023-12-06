import './ProfileInfo.css'
import Head from '../Images/user.png'
import LG from '../Images/logout.png'
import Plus from '../Images/plus.png'
import Minus from '../Images/minus.png'

export default function ProfileInfo(){

    return(
        <>
        <div className = "PIBody">
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
            <div className = "mainB">
                <div className ="mainB1" style={{ display: 'flex', gap: '98px',marginLeft: '65px', marginTop: '50px'}}>
                <div class="mb-3" style={{width: '300px'}}>
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name of User" style ={{border: '2px solid black'}}/>
                </div>
                <div class="mb-3" style={{width: '300px'}}>
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email of User" style ={{border: '2px solid black'}}/>
                </div>
                </div>
                <div className ="mainB2" style={{ display: 'flex', gap: '98px',marginLeft: '65px', marginTop: '50px'}}>
                <div class="mb-3" style={{width: '300px'}}>
                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="+63 123-4567-890" style ={{border: '2px solid black'}}/>
                </div>
                <div class="mb-3" style={{width: '300px'}}>
                    <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="DOB" style ={{border: '2px solid black'}}/>
                </div>
                </div>

                <div className = "mainB3" style={{marginTop: '20px', marginLeft: '65px'}}>
                    <h2 style= {{fontSize: '30px',fontWeight:'600'}}>Saved Addresses</h2>
                    <div class="mb-3" style={{width: '700px'}}>
                    <label for="exampleFormControlInput1" class="form-label">Default Address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Saved addresses" style ={{border: '2px solid black'}}/>
                    </div>
                    <div class="mb-3" style={{width: '700px'}}>
                    <label for="exampleFormControlInput1" class="form-label">Add Another Address <button className="imageButton"><img src={Plus} style={{ height: '25px' }} alt="Plus Icon" /></button><button className="imageButton"><img src={Minus} style={{ height: '25px' }} alt="Minus Icon" /></button></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Saved addresses" style ={{border: '2px solid black'}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}