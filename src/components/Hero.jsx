import '../styles/Hero.css';
import HeroImage from '../assets/hero-image.png'; // Verify this path

const Hero = () => {
  return (
    <section id="scrollspyNav" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Advanced Anti-Aging Treatments
          </h1>
          <ul className="hero-list">
            <li className="hero-list-item">
              <span className="icon">✔</span> Guaranteed Results
            </li>
            <li className="hero-list-item">
              <span className="icon">👨‍⚕️</span> India's Finest Dermatologists
            </li>
            <li className="hero-list-item">
              <span className="icon">🛠️</span> Best Treatment Technologies
            </li>
            <li className="hero-list-item">
              <span className="icon">✅</span> 100% Safe & US FDA Approved
            </li>
          </ul>
          <div className="hero-buttons">
            <a href="/" className="cta-button">
              Book Now
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="decorative-shape teal-circle"></div>
          <div className="decorative-shape orange-rectangle"></div>
          <img
            src={HeroImage}
            alt="Arunim Physiotherapy"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;