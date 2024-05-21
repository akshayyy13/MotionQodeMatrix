import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Landing from '../components/Landing/Landing';
import Rating from '../components/Rating/Rating';
import Display from '../components/Display/Display';
import Support from '../components/Feature/Support';

const Home = () => {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="1226"
      className="elementor elementor-1226 mx-auto text-[#EDE5FF] m480"
    >
      <Navbar />
      <Landing />
      <Rating />
      <Display />
      <Support />
    </div>
  );
}

export default Home
