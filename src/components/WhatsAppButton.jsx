import '../styles/WhatsAppButton.css';
import whatsappIcon from '../assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  const handleVibrate = () => {
    // Adding a class to trigger vibration animation
    const button = document.querySelector('.whatsapp-button');
    button.classList.add('vibrate');
  };

  // Add event listeners for scroll and tap
  window.addEventListener('scroll', handleVibrate);
  window.addEventListener('touchstart', handleVibrate);

  return (
    <a
      href="/" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      onClick={handleVibrate}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-image" />
    </a>
  );
};

export default WhatsAppButton;