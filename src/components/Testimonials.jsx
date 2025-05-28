import { useEffect, useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
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
  const totalItems = testimonials.length;
  const visibleItems = 10; // Number of items visible at a time on desktop
  const extendedTestimonials = [...testimonials, ...testimonials]; // Duplicate for infinite loop

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % extendedTestimonials.length;
        // When we reach the end of the first set, continue scrolling seamlessly
        return newIndex;
      });
    }, 2500); // 2.5 seconds scroll interval

    return () => clearInterval(interval);
  }, [extendedTestimonials.length]);

  return (
    <section id="scrollspyTestimonials" className="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-heading">
          <h2>
            Exceeding client <span className="highlight">expectations,</span> always
          </h2>
          <h3>Here are some testimonials by our worthy clients.</h3>
        </div>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
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