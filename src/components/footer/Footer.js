import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer__levelOne"></div>
     <div className="footer__levelTwo">
        <div className="footer__levelTwoFirst">
            <h4 className="footer__linksGroup">GLOBAL</h4>
            <div className="footer__links">
                <Link to='/work' className='footer__link'>Work</Link>
                <Link to='/about' className='footer__link'>About Us</Link>
                <Link to='/blog' className='footer__link'>Blog</Link>
                <Link to='/newsletter' className='footer__link'>Newsletter</Link>
                <Link to='/news' className='footer__link'>News</Link>
                <Link to='/careers' className='footer__link'>Careers</Link>
            </div>
        </div>
        <div className="footer__levelTwoSecond">
            <h4 className="footer__linksGroup">TECHNOLOGY</h4>
            <div className="footer__links">
                <Link to='/full-stack-pps' className='footer__link'>Full Stack Apps</Link>
                <Link to='/ai' className='footer__link'>Artificial Intelligence</Link>
                <Link to='/data-intensive-apps' className='footer__link'>Data Intensive Apps</Link>
                <Link to='/open-source' className='footer__link'>Open Source</Link>
            </div>
        </div>
        <div className="footer__levelTwoThird">
            <h4 className="footer__linksGroup">SERVICES</h4>
            <div className="footer__links">
                <Link to='/product-scope' className='footer__link'>Product Scope</Link>
                <Link to='/ux-ui' className='footer__link'>UX/UI</Link>
                <Link to='/mvp-builder' className='footer__link'>MVP Builder</Link>
                <Link to='/teams' className='footer__link'>Dedicated Teams</Link>
            </div>
        </div>
        <div className="footer__levelTwoFourth">
            <h4 className="footer__linksGroup">BUILD</h4>
            <div className="footer__links">
                <Link to='/pricing' className='footer__link'>Play With Pricing</Link>
                <Link to='/start-a-project' className='footer__link'>Book A Call</Link>
            </div>
        </div>
     </div>
     <div className="footer__levelThree">
        <span>© 2022 Altar.io all rights reserved.</span>
        <div className="footer__socialIcons">
          <FaTwitter className="footer__socialIcon" />
          <FaFacebookF className="footer__socialIcon" />
          <TiSocialLinkedin className="footer__socialIcon" />
        </div>
     </div>
    </div>
  )
}

export default Footer