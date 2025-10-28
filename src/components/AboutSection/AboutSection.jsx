import React from 'react';
import './AboutSection.css';
import aboutImage from "/about.png";
import aboutImage2 from "/about2.jpg";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">Who We Are</h2>
        <div className="about-text-images">
          <div className="about-text">
            <p>
              The Therapy Room is a private mental health centre in Singapore. With a team of clinical, educational, and counselling psychologists as well as counsellors trained in different modalities, we are equipped to manage our clients’ concerns in the most effective way. We provide psychological assessments and intervention for clients across the developmental lifespan — children, teenagers, and adults. We see clients with a range of mental health conditions like depression, anxiety, trauma, and personality disorders, as well as clients with special needs such as autism and attention deficit hyperactivity disorder. We provide individual, couple, family, and group therapy, depending on our clients’ needs.
            </p>
            <p>
              At The Therapy Room, our philosophy is to empower our clients to improve their own mental well-being. As we believe mental well-being is for everyone, our services extend beyond in-house consultations to events held locally and overseas. For instance, we work with various corporate, social service, and non-profit organisations to organise workshops related to mental well-being. Through our events, we strive to bring mental health to people young and old across the developmental lifespan, as well as “Invisible Communities” – people who have fallen through the cracks.
            </p>
          </div>
          <div className="about-images">
            <img src={aboutImage} alt="About Us 1" className="about-image-1" />
            <img src={aboutImage2} alt="About Us 2" className="about-image-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
