import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import ResponsiveImage from '../components/ResponsiveImage';
import { images } from '../data/images';
import { divisions, teamMembers } from '../data/team';
import type { TeamMember } from '../types';

type PersonCardProps = {
  member: TeamMember;
  featured?: boolean;
};

function PersonCard({ member, featured = false }: PersonCardProps) {
  const displayName = member.name.trim() || 'Name TBA';
  return (
    <article className={`person ${featured ? 'person-featured' : ''}`}>
      <div className="person-photo" aria-hidden="true">
        {member.photo ? (
          <img src={member.photo} alt="" width={440} height={440} loading="lazy" decoding="async" />
        ) : (
          <span>
            {member.position
              .split(' ')
              .slice(0, 2)
              .map((word) => word[0])
              .join('')}
          </span>
        )}
      </div>
      <div>
        <h3>{displayName}</h3>
        <p className="person-role">{member.position}</p>
        {member.bio && <p>{member.bio}</p>}
      </div>
    </article>
  );
}

export default function Team() {
  const [lead, ...rest] = teamMembers;
  if (!lead) return null;

  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The people behind PT Samudra Biru Indonesia"
        image={images.teamCorporate}
      />

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title on-light">Leadership</h2>
          <p className="team-note">
            Individual names, actual titles, photos, and bios will be added once data is provided by the client.
          </p>
          <ScrollReveal>
            <PersonCard member={lead} featured />
          </ScrollReveal>
          <ScrollReveal className="person-grid" stagger>
            {rest.map((member) => (
              <PersonCard key={member.id} member={member} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Organizational Divisions</h2>
          <div className="division-grid">
            {divisions.map((division) => (
              <article key={division.id}>
                <h3>{division.title}</h3>
                <p>{division.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split">
          <ScrollReveal>
            <div className="prose">
              <h2>Partner Network</h2>
              <p>
                Trading doesn't happen in isolation. PT Samudra Biru Indonesia actively builds relationships with various stakeholders across the supply chain — including fishing cooperatives, hatcheries, cold storage facilities, logistics partners, suppliers, distributors, customers, and other business partners.
                We believe that a strong network creates a more effective supply chain while unlocking sustainable collaboration opportunities for all parties involved.
                
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <figure className="media-frame">
              <ResponsiveImage image={images.network} sizes="(max-width: 1023px) 100vw, 50vw" />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-mid">
        <div className="container join-band">
          <div>
            <h2>Join Us</h2>
            <p>
              We are open to collaboration opportunities — whether with talented professionals, suppliers, customers, or strategic partners who share a vision for building long-term business relationships.
              If you see an opportunity to work with PT Samudra Biru Indonesia, we are ready to discuss your needs and the potential for collaboration.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
