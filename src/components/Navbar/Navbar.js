import React from 'react';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './navbar.css'

const Navbar = () => {

    var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
  return (
    <div className='navbar nav-colored'>
        <Link to="http://localhost:3000/">
            <img src={logo} alt="" className='navbar__logo'/>
        </Link>
        <div className="navbar__links">
            <div className="navbar__link">
     <Link to='/work'>Work</Link>
            </div>
            <div className="navbar__link navbar__linkBox">
     <Link to='/services'>Services</Link>
     <KeyboardArrowDownOutlinedIcon fontSize='small' className='navbar__linkIcon'/>
            </div>
            <div className="navbar__link">
     <Link to='/pricing'>Pricing</Link>
            </div>
            <div className="navbar__link">
     <Link to='/about-us'>About Us</Link>
            </div>
            <div className="navbar__link">
     <Link to='/careers'>Careers</Link>
            </div>
            <div className="navbar__link navbar__linkBox">
     <Link to='/tech'>Tech</Link>
     <KeyboardArrowDownOutlinedIcon fontSize='small' className='navbar__linkIcon'/>
            </div>
            <div className="navbar__link">
     <Link to='/blog'>Blog</Link>
            </div>
            <div className="navbar__linkBooking">
                <button>
                <Link to='/start-a-project'>Book A Call</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar