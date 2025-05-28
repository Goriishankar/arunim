import { useParams, Link } from 'react-router-dom';
import '../styles/TeamMemberDetails.css';
import teamMember1Image from '../assets/team-member1.jpg'; // Image for Dr. Arun Sharma
import teamMember2Image from '../assets/team-member2.jpg'; // Image for Dr. Nisha Patel (adjust if needed)

// Sample team member data (in a real app, this would come from a backend)
const teamMembers = [
  {
    id: '1',
    name: 'Dr. Arun Sharma',
    designation: 'MPT - Orthopedic Physiotherapy',
    image: teamMember1Image, // Use the imported image
    degrees: 'MPT, BPT',
    bio: [
      'Dr. Arun Sharma is an experienced physiotherapist from Jaipur with a special focus on orthopedic physiotherapy, rehabilitation, and pain management. After completing his studies at Rajasthan University of Health Sciences, Dr. Sharma pursued advanced training in orthopedic rehabilitation and manual therapy.',
      'His areas of interest include orthopedic physiotherapy, post-surgery rehabilitation, and chronic pain management. Dr. Sharma is passionate about educating patients on injury prevention and actively participates in workshops and seminars to stay updated with the latest physiotherapy techniques.',
      'He is available for consultations at Arunim Physiotherapy Clinic in Jaipur with prior appointments.',
    ],
  },
  {
    id: '2',
    name: 'Dr. Nisha Patel',
    designation: 'MPT - Sports Physiotherapy',
    image: teamMember2Image, // Use the imported image
    degrees: 'MPT, BPT',
    bio: [
      'Dr. Nisha Patel is a dedicated sports physiotherapist based in Jaipur, specializing in injury recovery performance enhancement for athletes. She completed her education at Gujarat University and received specialized training in sports rehabilitation.',
      'Dr. Patel’s areas of expertise include sports physiotherapy, injury prevention, and performance optimization. She frequently collaborates with local sports teams and conducts workshops on safe training practices.',
      'She is available for consultations at Arunim Physiotherapy Clinic in Jaipur with prior appointments.',
    ],
  },
];

const TeamMemberDetails = () => {
  const { id } = useParams(); // Get the team member ID from the URL
  const member = teamMembers.find((member) => member.id === id);

  if (!member) {
    return <div className="not-found">Team member not found.</div>;
  }

  return (
    <section className="team-member-details">
      <div className="team-member-header">
        <div className="team-member-heading">
          <h2>
            About <span className="highlight">{member.name}</span>
          </h2>
        </div>
      </div>

      <div className="team-member-container">
        <div className="team-member-content">
          {/* Team Member Image Card */}
          <div className="team-member-image-card">
            <div className="card">
              <figure>
                <img src={member.image} alt={member.name} className="team-member-img" />
                <figcaption>
                  <h2>{member.name}</h2>
                  <h3>{member.designation}</h3>
                  <h3>{member.degrees}</h3>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Team Member Info Card */}
          <div className="team-member-info-card">
            <div className="card">
              <div className="card-body">
                <p className="info-title">Information</p>
                <hr />
                {member.bio.map((paragraph, index) => (
                  <p key={index} className="bio-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Team Link */}
        <Link to="/#scrollspyTeam" className="back-link">
          ← Back to Team
        </Link>
      </div>
    </section>
  );
};

export default TeamMemberDetails;