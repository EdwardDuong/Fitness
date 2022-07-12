import React from "react";
import Hero from "../../components/Hero/Hero";
import Join from "../../components/Join/Join";
import Plans from "../../components/Plans/Plans";
import Programs from "../../components/Program/Programs";
import Reason from "../../components/Reason/Reason";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import "./home.css";
const Home = () => {
  return (
    <div className="home" id="Home">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
