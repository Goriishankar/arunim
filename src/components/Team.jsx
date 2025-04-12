import { Link } from 'react-router-dom';
import '../styles/Team.css';
import TeamMemberImage from '../assets/team-member1.png';

const Team = () => {
  return (
    <section id="scrollspyTeam" className="team">
      {/* Heading Section */}
      <div className="team-header">
        <div className="team-heading">
          <h2>
            Innovative, <span className="highlight">experienced,</span> and proficient team
          </h2>
        </div>
      </div>

      {/* Team Grid */}
      <div className="team-container">
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-card">
            <div className="team-card-content">
              <div className="team-card-image">
                <img
                  src={TeamMemberImage}
                  alt="Dr. Arun Sharma"
                  className="team-img"
                />
              </div>
              <div className="team-card-details">
                <h2>Dr. Arun Sharma</h2>
                <p>MPT - Orthopedic Physiotherapy</p>
                <Link to="/team/1" className="learn-more">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-card">
            <div className="team-card-content">
            <div className="team-card-image">
                <img
                  src={TeamMemberImage}
                  alt="Dr. Arun Sharma"
                  className="team-img"
                />
              </div>
              <div className="team-card-details">
                <h2>Dr. Nisha Patel</h2>
                <p>MPT - Sports Physiotherapy</p>
                <Link to="/team/2" className="learn-more">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;