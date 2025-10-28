import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr Geraldine Tan",
      role: "Director / Principal Clinical and Counselling Psychologist",
      img: "/team1.jpg",
    },
    {
      name: "Amanda Ang",
      role: "Senior Counselling Psychologist",
      img: "/team2.jpg",
    },
    {
      name: "Chong Ning Xin",
      role: "Senior Educational Psychologist",
      img: "/team3.jpg",
    },
    {
      name: "Abigail Thio",
      role: "Associate Psychologist",
      img: "/team10.jpg",
    },
    {
      name: "Charissa Wong",
      role: "Clinical Psychologist",
      img: "/team4.jpg",
    },
    {
      name: "Brendan Mui",
      role: "Counsellor",
      img: "/team5.jpg",
    },
    {
      name: "Lee Mei Hui",
      role: "Counselling Psychologist",
      img: "/team6.jpg",
    },
    {
      name: "Marie Chong",
      role: "Counselling Psychologist",
      img: "/team7.jpg",
    },
    {
      name: "Eunice Lim",
      role: "Clinical Psychologist",
      img: "/team8.jpg",
    },
    {
      name: "Chloe Tan",
      role: "Associate Psychologist",
      img: "/team9.jpg",
    },
  ];

  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.img} alt={member.name} className="team-member-img" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
