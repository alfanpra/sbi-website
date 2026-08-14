import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import { images } from '../data/images';
import { divisions, teamMembers } from '../data/team';
import type { TeamMember } from '../types';

type PersonCardProps = {
  member: TeamMember;
  featured?: boolean;
};

function PersonCard({ member, featured = false }: PersonCardProps) {
  const displayName = member.name.trim() || 'Nama menyusul';
  return (
    <article className={`person ${featured ? 'person-featured' : ''}`}>
      <div className="person-photo" aria-hidden="true">
        {member.photo ? (
          <img src={member.photo} alt="" />
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
        title="Tim Kami"
        subtitle="Orang-orang di balik PT Samudra Biru Indonesia"
        image={images.teamCorporate}
      />

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title on-light">Kepemimpinan</h2>
          <p className="team-note">
            Profil lengkap akan dilengkapi oleh perusahaan. Struktur jabatan berikut sudah ditetapkan.
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
          <h2 className="section-title">Divisi Organisasi</h2>
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
              <h2>Jaringan Mitra</h2>
              <p>
                Operasi kami ditopang kemitraan dengan koperasi nelayan, hatchery, cold storage, dan
                mitra logistik. Jaringan ini memungkinkan pasokan yang konsisten tanpa memutus rantai
                dingin dari lokasi produksi hingga pembeli.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <figure className="media-frame">
              <img src={images.network.src} alt={images.network.alt} />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-mid">
        <div className="container join-band">
          <div>
            <h2>Bergabung Bersama Kami</h2>
            <p>
              Kami membuka ruang bagi talenta operasional dan mitra strategis yang ingin membangun
              perdagangan perikanan yang dapat diandalkan.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </>
  );
}
