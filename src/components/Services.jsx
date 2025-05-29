import ServiceIcon from '../assets/Service1.png';
import ServiceIcon2 from '../assets/Service2.png';
import ServiceIcon3 from '../assets/Service3.png';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="scrollspyServices" className="services">
      {/* Heading Section */}
      <div className="services-header">
        <div className="services-heading">
          <h2>
            Expert Care with Our{' '}
            <span className="highlight">Proficient</span> Services
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src={ServiceIcon}
                alt="Physiotherapy Consultation Icon"
                className="service-image"
              />
            </div>
            <h4>Physiotherapy Consultation</h4>
            <p>
              Comprehensive diagnosis and treatment for a range of mobility issues including back pain, joint stiffness, and post-injury recovery.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src={ServiceIcon2}
                alt="Manual Therapy Icon"
                className="service-image"
              />
            </div>
            <h4>Manual Therapy</h4>
            <p>
              Hands-on techniques to relieve pain, improve mobility, and restore function for conditions like arthritis and muscle strains.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src={ServiceIcon3}
                alt="Electrotherapy Icon"
                className="service-image"
              />
            </div>
            <h4>Electrotherapy</h4>
            <p>
              Advanced treatment using electrical stimulation to reduce pain, promote healing, and improve muscle function.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <div className="service-icon">
              <img
                src={ServiceIcon}
                alt="Post-Surgery Rehabilitation Icon"
                className="service-image"
              />
            </div>
            <h4>Post-Surgery Rehabilitation</h4>
            <p>
              Personalized programs to help patients recover strength, mobility, and function after surgical procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;