import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import PlayerSection from '../components/PlayerSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <PlayerSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;