import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import telephone from '../Images/telephone.png';
import mail from '../Images/mail.png';
import CompanyLogo from '../Images/Company Logo.jpg';
import './Navbar.css';

function Navbar() {
  return (
    <div className='box'>
        <div className='nav'>
                <div className='overlap'>
                    <div className='navbar'>
                        <div className='login-sign'>
                            <div className='frame'>
                                <Link to="/login" className='login'>
                                <div className='text-wrapper'>LOGIN</div>
                                </Link>
                                <Link to="/signup" className='signup-btn'>
                                <div className='div'>SIGNUP</div>
                                </Link>
                            </div>
                        </div>
                        <div className='tel'>
                            <img src={telephone} alt='telephone' className='telephone'/> 
                            <div className='text-wrapper2'>123-4567-890</div>
                        </div>
                        <div className='supp'>
                            <img src={mail} alt='mail' className='mail'/>
                            <div className='text-wrapper3'>support@smartdelivery.com</div>
                        </div>
                    </div>
                    <div className='overlap-group-wrapper'>
                        <div className='overlap-group'>
                            <div className='group'>
                                <div className='text-wrapper4'>Smart Delivery</div>
                                <img src={CompanyLogo} alt='Company Logo' className='company-logo' />
                            </div>
                            <div className='nav-bar'>
                                <Link to="/">Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                <Link to="/services">Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                <Link to="/about">About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                <Link to="/contact-us">Contact&nbsp;&nbsp;&nbsp;Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                <Link to="/reviews">Reviews</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default Navbar;