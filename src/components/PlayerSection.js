import React from 'react';
import '../App.css';
import { Button } from './Button';
import './css/Playersection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/footballcort.mp4' autoPlay loop muted />
      <h1>FOOTBALL AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonPath='login'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          buttonPath='/search' 
          onClick={console.log('hey')}
        >
          GET SEARCH <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;