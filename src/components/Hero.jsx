import { useEffect, useState } from 'react';
import '../styles/Hero.css';
import HeroImage from '../assets/hero-image.png'; // Verify this path

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Arunim Physiotherapy';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="scrollspyNav" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Experience expert physiotherapy care with <br />
            <span className="highlight">{typedText}</span>
          </h1>
          <p className="hero-subtitle">
            Where compassionate guidance meets personalized treatment for optimal recovery and well-being.
          </p>
          <div className="hero-buttons">
            <a href="https://web.whatsapp.com/" className="cta-button">
              Book Consultation
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