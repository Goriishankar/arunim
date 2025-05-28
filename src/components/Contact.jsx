import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="scrollspyContact" className="contact-info">
      <div className="contact-container">
        <div className="contact-column contact-details">
          <div className="contact-details-wrap">
            <h2 className="contact-heading">Get In Touch</h2>

            {/* Phone Numbers */}
            <div className="contact-icon-box">
              <div className="icon-box-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Numbers</h3>
                <p className="icon-box-description">
                  General Inquiries/Booking: <br />
                  <a href="tel:+911205105154" className="link">+91-120-5105154</a>,{' '}
                  <a href="tel:+919958881038" className="link">+91-9958881038</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-icon-box">
              <div className="icon-box-icon">
                <a href="mailto:reception@clinicsparsh.com">
                  <i className="far fa-envelope"></i>
                </a>
              </div>
              <div className="icon-box-content">
                <h3 className="icon-box-title">
                  <a href="mailto:reception@clinicsparsh.com">Email</a>
                </h3>
                <p className="icon-box-description">
                  reception@clinicsparsh.com
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-icon-box">
              <div className="icon-box-icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Business Hours</h3>
                <p className="icon-box-description">
                  Monday — Saturday 10 am – 8pm <br />
                  Sunday — 11 am – 1 pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-column contact-map-column">
          <div className="contact-map">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Dr%20Anjali%20Gupta%20Sparsh%20Speciality%20Clinic&t=m&z=13&output=embed&iwloc=near"
              title="Dr Anjali Gupta Sparsh Speciality Clinic"
              aria-label="Dr Anjali Gupta Sparsh Speciality Clinic"
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;