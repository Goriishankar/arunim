import '../styles/Hero.css';
import HeroImage from '../assets/hero-image.png'; // Verify this path

const Hero = () => {
  return (
    <section id="scrollspyNav" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Expert Care at <br />
            <span className="highlight">Arunim Physiotherapy</span>
          </h1>
          <p className="hero-subtitle">
            Your journey to recovery starts with personalized, compassionate care.
          </p>
          <div className="hero-buttons">
            <a href="https://web.whatsapp.com/" className="cta-button">
              Book Now
            </a>
          </div>
        </div>
        <div className="hero-image">
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