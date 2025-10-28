import React from 'react';
import './Hero.css';
import heroImage from "../../../public/main.png";
import BlurText from '../BlurText/BlurText';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <BlurText text="The Therapy Room" className="hero-h1" />
        <BlurText text="A private mental health centre in Singapore" className="hero-h2" delay={400} />
        <BlurText text="Upholding quality standards with Integrity and Authenticity" className="hero-h3" delay={600} />
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Maria Micha" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
