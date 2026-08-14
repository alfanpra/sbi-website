import { BadgeCheck, Briefcase, Leaf, ShieldCheck, Users, type LucideIcon } from 'lucide-react';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import CertificationBar from '../components/CertificationBar';
import ResponsiveImage from '../components/ResponsiveImage';
import { images } from '../data/images';
import { companyProfile, missions, vision } from '../data/missions';
import { values } from '../data/values';
import type { ValueId } from '../types';

const valueIcons: Record<ValueId, LucideIcon> = {
  integrity: ShieldCheck,
  quality: BadgeCheck,
  professionalism: Briefcase,
  partnership: Users,
  sustainability: Leaf,
};

export default function About() {
  return (
    <>
      <PageHero
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat PT Samudra Biru Indonesia"
        image={images.heroOcean}
      />

      <section className="section section-light">
        <div className="container split">
          <ScrollReveal>
            <figure className="media-frame media-frame-skyline">
              <ResponsiveImage
                image={images.jakartaOffice}
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </figure>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose">
              <h2>Profil Perusahaan</h2>
              {companyProfile.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-dark vision">
        <div className="container vision-inner">
          <h2>Visi</h2>
          <blockquote>
            <p>{vision}</p>
          </blockquote>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title on-light">Misi</h2>
          <ol className="mission-grid">
            {missions.map((mission) => (
              <li key={mission.number}>
                <span className="mission-num">{mission.number}</span>
                <div>
                  <h3>{mission.title}</h3>
                  <p>{mission.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-mid">
        <div className="container">
          <h2 className="section-title on-light">Nilai Perusahaan</h2>
          <div className="value-stagger">
            {values.map((value) => {
              const Icon = valueIcons[value.id];
              return (
                <article key={value.id} className="value-block">
                  <Icon size={36} strokeWidth={1.4} aria-hidden="true" />
                  <h3>{value.name}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Sertifikasi & Kepatuhan</h2>
          <CertificationBar />
        </div>
      </section>
    </>
  );
}
