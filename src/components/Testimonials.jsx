import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/Testimonials.css';

const SuccessStories = () => {
  const testimonials = [
    {
      author: 'Rahman Mujeeb',
      rating: 5,
      quote: 'We are referring to Dr. Pallavi Prasad and got very best diagnosis of the problem and treatment. We are blessed and many thanks to Dr. Pallavi Prasad and Nova IVF Clinic team. You are the best know. Highly recommend Nova IVF and especially Dr. Pallavi Prasad. Thank you.',
    },
    {
      author: 'Chaitanya Guthula',
      rating: 5,
      quote: 'On our first visit to the Pallavi Prasad we felt she is genuine and promising. She does what is needed and gives fair treatment extra was done in terms diagnostics/treatment/ medication/ Modern is friendly and whole hearted. We heard the good news recently for which we have been waiting for many years. Have hope and let the doctors do the best. All the best to future parents.',
    },
    {
      author: 'Asha Nadiya',
      rating: 5,
      quote: 'Feeling very happy to be in Nova IVF center in Basveswarnagar with Dr. Pallavi prasad mam. I had got married for 2 and half year and we didn\'t had any hope on child. Finally we spoke to Dr. Pallavi prasad and she gave good confidence and attempted IUI, now our dream came true where now I am 3 and half month pregnant with good healthy baby in me.',
    },
    {
      author: 'Gajendra Sreerama',
      rating: 5,
      quote: 'We are very Happy to share that after a long waiting of 7years we heard good news.NOVA IVF made our dream filled with lot of happiness.Hospitality is very good. Thanks.',
    },
    {
      author: 'Sarath Babu',
      rating: 5,
      quote: 'Hi Everyone I am SARATH my wife name Sujatha. We have taken treatment with Nova ivf hospital basaveswara nagar, we have got twin babies now we are happy. I would like to tell and update I have trust with Nova and make success my treatment. We and all our family happy because of NOVA.',
    },
    {
      author: 'Shilpa Prasad',
      rating: 5,
      quote: 'We came to Nova IVF Whitefield, we found Dr Lavanya madam very nice treatment. Very kind, loving and patient. Sisters treated very nice. Lab person drawn blood with very less pain. Whole team I found nice, kind and patient.and finally we are happy positive pregnancy with twins thank you Nova and the team',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = testimonials.length;
  const visibleItems = 2; // Show 2 items per slide on desktop
  const extendedTestimonials = [...testimonials, ...testimonials]; // Duplicate for infinite loop

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + extendedTestimonials.length) % extendedTestimonials.length;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % extendedTestimonials.length;
      return newIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true, // Allow mouse drag for desktop
  });

  return (
    <section id="scrollspySuccessStories" className="success-stories">
      <div className="container">
        <h1 className="heading">OUR SUCCESS STORIES</h1>
        <p className="subheading">
          89357 Happy Couples with real stories from Nova IVF patients, we are proud that we have helped thousands of couples to start their families year after year.
        </p>
        <div className="google-reviews">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
            className="google-logo"
          />
          <span>4.8 <span className="stars">★★★★★</span> 2811 REVIEWS</span>
        </div>
        <div className="testimonials">
          <div className="testimonials-carousel" {...handlers}>
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <div className="testimonial-card">
                    <div className="name">
                      <span className="profile-icon">👤</span>
                      {testimonial.author} <span className="stars">★★★★★</span>
                    </div>
                    <p>{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="dots">
          {Array.from({ length: totalItems }, (_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex % totalItems === index ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;