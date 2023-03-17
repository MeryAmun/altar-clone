import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {  hero, review, reviewLogo } from "../../assets";
import Reveal from 'react-reveal/Reveal';
import { FaQuoteLeft } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import "./home.css";
import { serviceOptions, team } from "../../staticData/staticData";
import { ServiceOptionCard } from "../../cards";
import { AiFillPlayCircle } from "react-icons/ai";
import ImageComponent from "../../components/imageComponent/ImageComponent";

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__heroVideo">
          <video src={hero} autoPlay muted loop></video>
        </div>
        <div className="home__header">
          <Slide bottom>
            <h1>
              Custom Product & <br /> Software Development <br /> Focused On
              Your Success
            </h1>
          </Slide>
          <Slide bottom>
            <button className="home__headerButton">
              <Link to="/start-a-project">BOOK A CALL</Link>
            </button>
          </Slide>
        </div>
      </div>
      <div className="home__services">
        <Slide bottom>
          <div className="home__servicesHeader">
            <h2 className="home__servicesHeaderTitle">Services</h2>
            <p className="home__servicesHeaderText">
              We can help you bring your product to life - <br /> whether it's a
              Minimum Viable Product, UX/UI <br /> Services or help to scale
              your company.
            </p>
          </div>
        </Slide>
        <Slide bottom>
          <div className="home__serviceOptions">
            {serviceOptions?.map(({ icon, title, text }, index) => (
              <ServiceOptionCard
                key={index}
                title={title}
                icon={icon}
                text={text}
              />
            ))}
          </div>
        </Slide>
      </div>
      <div className="home__review">
        <div className="home__reviewVideo">
          {/* <video src='https://www.youtube.com/watch?v=ib43NVgp_x0'></video> */}
          <video loop ref={videoRef} src={review}></video>
          <AiFillPlayCircle
            className="home__reviewVideoIcon"
            onClick={onVideoPress}
          />
          {/* <span className='home__reviewVideoIcon'><AiFillPlayCircle /></span> */}
        </div>
        <Slide bottom>
          <div className="home__reviewMessage">
            <FaQuoteLeft color="#0044FF" className="home__reviewQuote" />
            <p className="home__reviewText">
              We are very happy to work with Altar.io. The collaboration goes
              far beyond a standard IT service: with Altar.io we have a sparring
              partner that challenges us in our product decisions and is truly
              passionate about the results developed. The level of
              professionalism and dedication is exceptional in this industry and
              we are eager to strengthen our collaboration in the future.
            </p>
            <span className="home__reviewer">
              Philip Schoch - Apiax, Co-Founder
            </span>
            <Reveal effect="fadeInUp">
            <img src={reviewLogo} alt="" className="home__reviewClient" />
            </Reveal>
          </div>
        </Slide>
      </div>
      <div className="home__cases">
        <div className="home__casesHeader">
        <Reveal effect="fadeInUp">
          <h2 className="home__casesTitle">Case Studies</h2>
          </Reveal>
          <Slide bottom>
          <p className="home__casesText">
          We are proud to work with truly innovative clients. Here are just a few of the companies we’ve had the privilege to work with.
          </p>
          </Slide>
        </div>
        <div className="home__casesBody">
          <div className="home__casesImages">
           <ImageComponent/>
            {/* <img src="https://cdn-bpphg.nitrocdn.com/WvJxwYJgWNVdwgfGCwfpdhJOrQEaryEr/assets/images/optimized/rev-e3576ea/altar.io-neo/wp-content/uploads/2021/06/20220633/reic-tilt-4.png" alt="" /> */}
          </div>
          <div className="home__casesBodyRight">
            <h6><strong>FINTECH</strong></h6>
            <h3><strong>REIC</strong></h3>
           <p className="home__casesBodyRightText">
           REIC (Real Estate Intelligence Cloud), developed in collaboration with AlixPartners, aims to assess the fair forward-looking value of real estate developments and the fair credit value of real estate developers – and to suggest underwriting overrides when lending to these counterparts.
           </p>
           <button className="home__casesBodyRightBtn">
              <Link to="/case-study">SEE CASES STUDY</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="home__casesBody">
          <div className="home__casesImages">
           <ImageComponent/>
            {/* <img src="https://cdn-bpphg.nitrocdn.com/WvJxwYJgWNVdwgfGCwfpdhJOrQEaryEr/assets/images/optimized/rev-e3576ea/altar.io-neo/wp-content/uploads/2021/06/20220633/reic-tilt-4.png" alt="" /> */}
          </div>
      <div className="home__casesBodyRight">
            <h6><strong>MUSICTECH</strong></h6>
            <h3><strong>Audio Test Kitchen</strong></h3>
           <p className="home__casesBodyRightText">
           ATK is the world’s first platform to compare professional audio gear in a fully immersive, interactive and unbiased way. With Audio Test Kitchen, audio engineers and record producers can skip the hype and directly compare the sound of different audio gear.
           </p>
           <button className="home__casesBodyRightBtn">
              <Link to="/case-study">SEE CASES STUDY</Link>
            </button>
          </div>
          </div>
          <div className="home__team">
            {
              team?.map(({image, title,text,link},index) => (
                <div className="home__teamMember" key={index}>
              <img src={image} alt="" className="home__teamMemberImg" />
              <div className="home__teamMemberDetails">
              <h5 className="home__teamMemberTitle">{title}</h5>
              <p className="home__teamMemberText">{text}</p>
              <button className="home__teamMemberBtn">
              <Link to="/case-study">{link}</Link>
            </button>
              </div>
            </div>
              ))
            }
          </div>
    </div>
  );
};

export default Home;
