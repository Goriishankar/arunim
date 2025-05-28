import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  // Helper to check if link is active
  const isActive = (sectionId) => {
    return location.hash === `#${sectionId}` || (sectionId === 'scrollspyNav' && location.hash === '');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
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
          {[
            { id: 'scrollspyNav', label: 'Home' },
            { id: 'scrollspyServices', label: 'Services' },
            { id: 'scrollspyTeam', label: 'Team' },
            { id: 'scrollspyPortfolio', label: 'Portfolio' },
            { id: 'scrollspyTestimonials', label: 'Testimonials' },
            { id: 'scrollspyContact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={`/#${item.id}`}
                className={isActive(item.id) ? 'active' : ''}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;