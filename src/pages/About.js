import React from 'react';
import '../App.css';
import '../components/css/About.css'
import circleImage from './img/face.jpg'; // Шлях до круглої картинки
import video from './videos/backgroundAboutPage.mp4'

export default function About() {
  return (
    <div className="about-container">
      <video autoPlay loop muted className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1 className='title'>MATCH MONITOR</h1>
        <p className="description">
          Match Monitor provides comprehensive statistics and analysis for football matches. 
          We collect and analyze data to give you insights into team performance, player statistics, 
          and match outcomes.
        </p>
        <div className="image-container">
          <img src={circleImage} alt="Circle" className="circle-image" />
          <p className="image-caption">CEO & Developer</p>
        </div>
      </div>
    </div>
  );
}
