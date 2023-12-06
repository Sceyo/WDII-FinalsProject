import './OrdersHistory.css'

export default function OrdersHistory(){

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
               
            </div>
        </div>
        </>
    )
}