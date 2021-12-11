import React from 'react';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


function Navbar() {
  return (
    <>
  <div className= "main-div bg-info d-flex justify-content-between">
  <div className="img"><img className='img-fluid rounded-circle'
   src="./images/portfolio.jpg" alt="blank" style={{height:50,width:70}} /></div>
  <div className="link-div">
  <ul className="d-flex">
  <li>
  <NavLink className='text-light' style={{textDecoration:"none",fontSize:20}} to="/home">Home Page</NavLink></li>
  <li><NavLink  className='text-light' style={{textDecoration:"none",fontSize:20}} to="about">About Page </NavLink></li>
  <li><NavLink  className='text-light' style={{textDecoration:"none",fontSize:20}} to="search">Search Page </NavLink></li>
  <li><NavLink  className='text-light' style={{textDecoration:"none",fontSize:20}} to="result">Result Page</NavLink></li>
  
  </ul>
  
  </div>



  <div className="icon-div">
  <FacebookIcon/>
  <TwitterIcon/>
  <WhatsAppIcon/>
  </div>
  
  </div>
      
    </>
  );
}

export default Navbar;
