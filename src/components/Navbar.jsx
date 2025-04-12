import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle smooth scrolling for in-page sections
  const handleScroll = (sectionId) => {
    // If we're on the homepage, scroll to the section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Arunim Physiotherapy Logo" />
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link
              to="/#scrollspyNav"
              onClick={() => handleScroll('scrollspyNav')}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#scrollspyServices"
              onClick={() => handleScroll('scrollspyServices')}
            >
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#scrollspyTeam"
              onClick={() => handleScroll('scrollspyTeam')}
            >
              Team
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#scrollspyPortfolio"
              onClick={() => handleScroll('scrollspyPortfolio')}
            >
              Portfolio
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#scrollspyTestimonials"
              onClick={() => handleScroll('scrollspyTestimonials')}
            >
              Testimonials
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/#scrollspyContact"
              onClick={() => handleScroll('scrollspyContact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;