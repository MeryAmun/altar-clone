import React from 'react';
import { Link } from 'react-router-dom'
import { hero } from '../../assets';
import Slide from 'react-reveal/Slide';
import './home.css'
import { serviceOptions } from '../../staticData/staticData';
import { ServiceOptionCard } from '../../cards';

const Home = () => {
  return (
    <div className='home'>
        <div className="home__hero">
           <div>
           <video src={hero} autoPlay muted loop className='home__heroVideo'></video>
           </div>
            <div className="home__header">
                <Slide bottom>
                <h1>Custom Product & <br /> Software Development <br /> Focused On Your Success</h1>
                </Slide>
                  <Slide bottom>
                <button className="home__headerButton">
                <Link to='/start-a-project'>BOOK A CALL</Link>
                </button>
                </Slide>
            </div>
        </div>
        <div className="home__services">
          <div className="home__servicesHeader">
            <h2 className="home__servicesHeaderTitle">
           <strong>Services</strong>
            </h2>
            <p className="home__servicesHeaderText">
            We can help you bring your product to life - <br /> whether it's a Minimum Viable Product, UX/UI <br /> Services or help to scale your company.
            </p>
          </div>
          <div className="home__serviceOptions">
           {
            serviceOptions?.map(({icon,title,text},index) => (
              <ServiceOptionCard key={index} title={title} icon={icon} text={text}/>
            ))
           }
          </div>
        </div>
    </div>
  )
}

export default Home