import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="scrollspyContact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Google Map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.620073597614!2d75.803979315077!3d26.882149983138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b8f5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1708408217882!5m2!1sen!2sin"
              style={{ width: '100%', height: '550px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arunim Physiotherapy Location"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="details-wrapper">
              <h2>Your health is our priority</h2>
              <p className="lead">
                Reach out to us for compassionate and expert physiotherapy care. Our dedicated team is here to answer your questions, address your concerns, and guide you on your wellness journey.
              </p>

              {/* Address */}
              <div className="contact-info">
                <div className="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-geo"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Address</h4>
                  <address>
                    <strong>Arunim Physiotherapy</strong>, Near Kalyan Nagar Underpass, <br />
                    Adarsh Krishna Nagar, Kartarpur, Gopal Pura Mode, Jaipur, Rajasthan
                  </address>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="contact-info">
                <div className="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-telephone-outbound"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
                <div>
                  <h4>Phone No</h4>
                  <p>
                    <a href="tel:+919876543210" className="link">
                      (+91) 98765-43210
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919123456789" className="link">
                      (+91) 91234-56789
                    </a>
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="contact-info">
                <div className="info-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-calendar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4>Timings</h4>
                  <p>
                    <strong>Morning:</strong> 08:00 AM - 09:00 AM (Monday to Saturday)
                  </p>
                  <p>
                    <strong>Evening:</strong> 05:30 PM - 06:30 PM (Monday to Thursday and Saturday)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;