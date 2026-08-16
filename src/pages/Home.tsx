import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  Boxes,
  Briefcase,
  Fish,
  Handshake,
  Leaf,
  ShieldCheck,
  Ship,
  ShoppingBasket,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CtaBanner from '../components/CtaBanner';
import ResponsiveImage from '../components/ResponsiveImage';
import { company } from '../data/company';
import { images } from '../data/images';
import { companyIntro, qualityCommitment } from '../data/missions';
import { services } from '../data/services';
import { values } from '../data/values';
import type { ValueId } from '../types';

const fieldIcons: LucideIcon[] = [Fish, Ship, ShoppingBasket, UtensilsCrossed, Handshake, Boxes];
const valueIcons: Record<ValueId, LucideIcon> = {
  integrity: ShieldCheck,
  quality: BadgeCheck,
  professionalism: Briefcase,
  partnership: Users,
  sustainability: Leaf,
};

const splitSizes = '(max-width: 1023px) 100vw, 50vw';

export default function Home() {
  return (
    <>
      <section className="hero">
        <video src="/images/background.webm" className="hero-media" autoPlay loop muted playsInline />
        <div className="hero-veil" />
        <div className="container hero-copy">
          <h1 className="hero-title">{company.tagline}</h1>
          <p className="hero-lead">
            PT Samudra Biru Indonesia is your business partner in the cultivation, trading, and
            distribution of fishery commodities and a wide range of commercial goods.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-gold">
              About Us
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split">
          <ScrollReveal>
            <figure className="media-frame">
              <ResponsiveImage image={images.aquaculture} sizes={splitSizes} />
            </figure>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose">
              <h2>PT Samudra Biru Indonesia</h2>
              {companyIntro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <Link to="/about" className="text-link">
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Business Areas</h2>
          <ScrollReveal className="fields-grid" stagger>
            {services.map((service, i) => {
              const Icon = fieldIcons[i];
              if (!Icon) return null;
              return (
                <article key={service.id} className={`field-tile field-tile-${i + 1}`}>
                  <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{service.short}</h3>
                  <p>{service.title}</p>
                </article>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split split-reverse">
          <ScrollReveal>
            <div className="prose">
              <h2>Quality Commitment</h2>
              <p>{qualityCommitment}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <figure className="media-frame media-frame-upper">
              <ResponsiveImage image={images.coldChain} sizes={splitSizes} />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-dark values-section">
        <div className="container">
          <h2 className="section-title">Company Values</h2>
          <ul className="value-strip">
            {values.map((value) => {
              const Icon = valueIcons[value.id];
              return (
                <li key={value.id}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <strong>{value.name}</strong>
                  <span>{value.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBanner heading="Ready to Partner with Us?" />
    </>
  );
}
