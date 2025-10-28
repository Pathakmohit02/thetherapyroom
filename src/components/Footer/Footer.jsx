import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Maria Micha Counseling Center Logo" />

        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Clinicians</a></li>
            <li><a href="#articles">Admin Staff</a></li>
            <li><a href="#about">Events</a></li>
            <li><a href="#cancellations">Media and Publications</a></li>
            <li><a href="#appointment">Make Appointment</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Therapy Room. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react';
// import './Footer.css';
// import logo from '../../../public/logo.png'; 

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-logo">
//           <img src={logo} alt="Maria Micha Counseling Center Logo" />
//         </div>
//         <nav className="footer-nav">
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#services">Clinicians</a></li>
//             <li><a href="#articles">Admin Staff</a></li>
//             <li><a href="#about">Events</a></li>
//             <li><a href="#cancellations">Media and Publications</a></li>
//             <li><a href="#appointment">Make Appointment</a></li>
//           </ul>
//         </nav>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} The Therapy Room. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
