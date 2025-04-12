import ServiceIcon from '../assets/Service1.png';
import '../styles/Services.css';

const Services = () => {
  return (
    <section id="scrollspyServices" className="services">
      {/* Heading Section */}
      <div className="services-header">
        <div className="services-heading">
          <h2>
            Expert Care with our{' '}
            <span className="highlight">proficient</span> services
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
                src={ServiceIcon}
                alt="Physiotherapy Consultation Icon"
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
                src={ServiceIcon}
                alt="Physiotherapy Consultation Icon"
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
                alt="Physiotherapy Consultation Icon"
              />
            </div>
            <h4>Post-Surgery Rehabilitation</h4>
            <p>
              Personalized programs to help patients recover strength, mobility, and function after surgical procedures.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="service-card">
          <div className="service-icon">
              <img
                src={ServiceIcon}
                alt="Physiotherapy Consultation Icon"
              />
            </div>
            <h4>Sports Therapy</h4>
            <p>
              Specialized care for athletes to recover from injuries, enhance performance, and prevent future issues.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="service-card">
          <div className="service-icon">
              <img
                src={ServiceIcon}
                alt="Physiotherapy Consultation Icon"
              />
            </div>
            <h4>Chronic Pain Management</h4>
            <p>
              Holistic approaches to manage and alleviate chronic pain conditions like fibromyalgia and lower back pain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;