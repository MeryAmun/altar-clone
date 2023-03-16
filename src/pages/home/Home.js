import React from 'react';
import { Link } from 'react-router-dom'
import { hero, review, reviewLogo } from '../../assets';
import { FaQuoteLeft } from 'react-icons/fa'
import Slide from 'react-reveal/Slide';
import './home.css'
import { serviceOptions } from '../../staticData/staticData';
import { ServiceOptionCard } from '../../cards';
import { AiFillPlayCircle } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__hero">
           <div className='home__heroVideo'>
           <video src={hero} autoPlay muted loop ></video>
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
        <Slide bottom>
          <div className="home__servicesHeader">
            <h2 className="home__servicesHeaderTitle">
           Services
            </h2>
            <p className="home__servicesHeaderText">
            We can help you bring your product to life - <br /> whether it's a Minimum Viable Product, UX/UI <br /> Services or help to scale your company.
            </p>
          </div>
          </Slide>
          <Slide bottom>
          <div className="home__serviceOptions">
           {
            serviceOptions?.map(({icon,title,text},index) => (
              <ServiceOptionCard key={index} title={title} icon={icon} text={text}/>
            ))
           }
          </div>
          </Slide>
        </div>
        <div className="home__review">
          <div className="home__reviewVideo">
{/* <video src='https://www.youtube.com/watch?v=ib43NVgp_x0'></video> */}
<video src={review}></video>
<AiFillPlayCircle  className='home__reviewVideoIcon'/>
{/* <span className='home__reviewVideoIcon'><AiFillPlayCircle /></span> */}
          </div>
         <Slide bottom>
         <div className="home__reviewMessage">
            <FaQuoteLeft color='#0044FF' className='home__reviewQuote'/>
            <p className="home__reviewText">We are very happy to work with Altar.io. The collaboration goes far beyond a standard IT service: with Altar.io we have a sparring partner that challenges us in our product decisions and is truly passionate about the results developed. The level of professionalism and dedication is exceptional in this industry and we are eager to strengthen our collaboration in the future.</p>
            <span className="home__reviewer">Philip Schoch - Apiax, Co-Founder</span>
            <img src={reviewLogo} alt="" className='home__reviewClient'/>
          </div>
         </Slide>
        </div>
    </div>
  )
}

export default Home