import { useEffect, useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote: 'The physiotherapy sessions at Arunim were a game-changer for my back pain. The staff is incredibly supportive and knowledgeable!',
      author: 'Ravi Sharma',
    },
    {
      quote: 'After my knee surgery, the team at Arunim helped me regain my mobility faster than I expected. Highly recommend their services!',
      author: 'Priya Patel',
    },
    {
      quote: 'I’ve been dealing with chronic shoulder pain for years, but the personalized care at Arunim made a huge difference. Thank you!',
      author: 'Amit Kumar',
    },
    {
      quote: 'The sports therapy program at Arunim helped me recover from a sprain and get back to my training routine. Amazing experience!',
      author: 'Sneha Verma',
    },
    {
      quote: 'The staff at Arunim is professional and caring. Their rehabilitation program helped me recover from a car accident injury.',
      author: 'Vikram Singh',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic scrolling every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <section id="scrollspyTestimonials" className="testimonials">
      {/* Heading Section */}
      <div className="testimonials-header">
        <div className="testimonials-heading">
          <h2>
            Exceeding client <span className="highlight">expectations,</span> always
          </h2>
          <h3>Here are some testimonials by our worthy clients.</h3>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="testimonials-container">
        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="card">
                  <figure>
                    <figcaption>
                      <blockquote>{testimonial.quote}</blockquote>
                      <h4>{testimonial.author}</h4>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;