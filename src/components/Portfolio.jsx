import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';
import PortfolioImage from '../assets/achievement1.jpg';

const Portfolio = () => {
    return (
        <section id="scrollspyPortfolio" className="portfolio">
            {/* Heading Section */}
            <div className="portfolio-header">
                <div className="portfolio-heading">
                    <h2>
                        Explore our <span className="highlight">Professional</span> Achievements
                    </h2>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="portfolio-container">
                <div className="portfolio-grid">
                    {/* Gallery Item 1 */}
                    <div className="portfolio-item">
                        <figure>
                            <img
                                src={PortfolioImage}
                                alt="Achievement 1"
                                className="portfolio-img"
                            />
                        </figure>
                    </div>

                    {/* Gallery Item 2 */}
                    <div className="portfolio-item">
                        <figure>
                            <img
                                src={PortfolioImage}
                                alt="Achievement 1"
                                className="portfolio-img"
                            />
                        </figure>
                    </div>

                    {/* Gallery Item 3 */}
                    <div className="portfolio-item">
                        <figure>
                            <img
                                src={PortfolioImage}
                                alt="Achievement 1"
                                className="portfolio-img"
                            />
                        </figure>
                    </div>

                    {/* Gallery Item 4 */}
                    <div className="portfolio-item">
                        <figure>
                            <img
                                src={PortfolioImage}
                                alt="Achievement 1"
                                className="portfolio-img"
                            />
                        </figure>
                    </div>

                    {/* Gallery Item 5 */}
                    <div className="portfolio-item">
                        <figure>
                            <img
                                src={PortfolioImage}
                                alt="Achievement 1"
                                className="portfolio-img"
                            />
                        </figure>
                    </div>

                    {/* Gallery Item 6 */}
                    <div className="portfolio-item">
                        <figure>
                            <img
                                src={PortfolioImage}
                                alt="Achievement 1"
                                className="portfolio-img"
                            />
                        </figure>
                    </div>
                </div>

                {/* Explore More Button */}
                <div className="portfolio-button">
                    <Link to="/gallery" className="explore-button">
                        Explore More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;