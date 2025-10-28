import React from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Emotional " />
      </div>
      <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Clinicians</a>
        <a href="#">Admin Staff</a>
        <a href="#">Events</a>
        <a href="#">Media and Publications</a>
        <a href="#">FAQs</a>
        <a href="#">Links</a>
        
        
      </div>
      <a href="#" className="navbar__button">
        Log In
      </a>
      <button
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;




