import React from 'react';
import { Link } from 'react-router-dom'
import { hero } from '../../assets';
import Slide from 'react-reveal/Slide';
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__hero">
            <video src={hero} autoPlay muted loop className='home__heroVideo'></video>
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
    </div>
  )
}

export default Home