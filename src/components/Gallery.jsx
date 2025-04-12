import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import Achievement1 from '../assets/achievement1.jpg';
import Achievement2 from '../assets/achievement1.jpg';
import Achievement3 from '../assets/achievement1.jpg';
import Achievement4 from '../assets/achievement1.jpg';
import Achievement5 from '../assets/achievement1.jpg';
import Achievement6 from '../assets/achievement1.jpg';
import Achievement7 from '../assets/achievement1.jpg';
import Achievement8 from '../assets/achievement1.jpg';
import Achievement9 from '../assets/achievement1.jpg';
import Achievement10 from '../assets/achievement1.jpg';

const Gallery = () => {
  // Gallery images from assets
  const galleryImages = [
    { src: Achievement1, alt: 'Achievement 1' },
    { src: Achievement2, alt: 'Achievement 2' },
    { src: Achievement3, alt: 'Achievement 3' },
    { src: Achievement4, alt: 'Achievement 4' },
    { src: Achievement5, alt: 'Achievement 5' },
    { src: Achievement6, alt: 'Achievement 6' },
    { src: Achievement7, alt: 'Achievement 7' },
    { src: Achievement8, alt: 'Achievement 8' },
    { src: Achievement9, alt: 'Achievement 9' },
    { src: Achievement10, alt: 'Achievement 10' },
  ];

  return (
    <section className="gallery">
      {/* Heading Section */}
      <div className="gallery-header">
        <div className="gallery-heading">
          <h2>
            Our <span className="highlight">Complete</span> Gallery
          </h2>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <figure>
                <img src={image.src} alt={image.alt} className="gallery-img" />
              </figure>
            </div>
          ))}
        </div>

        {/* Back to Portfolio Link */}
        <div className="gallery-back">
          <Link to="/#scrollspyPortfolio" className="back-link">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;