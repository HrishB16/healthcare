import React from "react";
import "./Home.css";
import Girl from "./imgs/girl.png";
import Boy from "./imgs/boy.png";
import FreshCare from './imgs/FreshCare.png';
import GoogleMapReact from 'google-map-react'
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
const Home = () => {
  return (
    <div className="hero">
        <img src={FreshCare} class="freshCareLogo" alt="" />
      <div className="hero-banner">
        <img src={Girl} />
        
        <img src={Boy} />
      </div>
    </div>
  );
};

export default Home;
 