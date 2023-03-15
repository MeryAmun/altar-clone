import React, {useState} from 'react';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css'
import { NavSmall } from './styles';
import Twitter from '@mui/icons-material/Twitter';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    var navbar = document.querySelector('.navbar')

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
        <Link to="/">
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
                <Link to='/start-a-project'>BOOK A CALL</Link>
                </button>
            </div>
             <MenuOutlinedIcon fontSize='large' className="navbar__linksMenuIcon" onClick={() => setOpen(true)}/>

        </div>

        {/* ===================FOR SMALL SCREENS   ================================ */}

       <NavSmall show={open} onMouseLeave={() => setOpen(false)}>
       {/* <MenuOutlinedIcon fontSize='large' className="navbar__linkMenuIconSmall"/> */}
       <CloseIcon fontSize='large' className="navbar__linkMenuIconSmall" onClick={() => setOpen(false)}/>
       <div className="navbar__linksSmall">
            <div className="navbar__linkSmall">
     <Link to='/work'>Work</Link>
            </div>
            <div className="navbar__link navbar__linkBoxSmall">
     <Link to='/services'>Services</Link>
     <KeyboardArrowDownOutlinedIcon fontSize='small' className='navbar__linkIconSmall'/>
            </div>
            <div className="navbar__linkSmall">
     <Link to='/pricing'>Pricing</Link>
            </div>
            <div className="navbar__linkSmall">
     <Link to='/about-us'>About Us</Link>
            </div>
            <div className="navbar__linkSmall">
     <Link to='/careers'>Careers</Link>
            </div>
            <div className="navbar__link navbar__linkBoxSmall">
     <Link to='/tech'>Tech</Link>
     <KeyboardArrowDownOutlinedIcon fontSize='small' className='navbar__linkIconSmall'/>
            </div>
            <div className="navbar__linkSmall">
     <Link to='/blog'>Blog</Link>
            </div>
            <div className="navbar__linkBookingSmall">
                <button>
                <Link to='/start-a-project'>Book A Call</Link>
                </button>
            </div>
            </div>
            <div className="navbar__navbarSmallSocial">
<TwitterIcon className='navbar__socialIcon'/>
<FacebookIcon className='navbar__socialIcon'/>
<LinkedInIcon className='navbar__socialIcon'/>
            </div>
       </NavSmall>
    </div>
  )
}

export default Navbar