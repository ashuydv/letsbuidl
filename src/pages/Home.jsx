import React from "react";
import Header from "../components/Header";
import "../App.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Communities from "../components/Communities";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const Home = () => {
  return ( 
    <div>
      <Hero />
      <Communities />
      <CTA />
    </div>
  );
};

export default Home;
