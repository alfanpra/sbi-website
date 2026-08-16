import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import FaqAccordion from '../components/FaqAccordion';
import MapEmbed from '../components/MapEmbed';
import { company } from '../data/company';
import { images } from '../data/images';
import { faqs } from '../data/faq';
import { telHref } from '../data/seo';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're ready to be your business partner"
        image={images.jakartaOffice}
      />

      <section className="section section-light">
        <div className="container contact-split">
          <aside className="contact-info">
            <h2>Contact Information</h2>

            <div className="contact-block">
              <MapPin size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Address</h3>
                <address>
                  {company.address.street}
                  <br />
                  {company.address.district}
                  <br />
                  {company.address.city}
                </address>
              </div>
            </div>

            <div className="contact-block">
              <Phone size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                {company.phones.map((phone) => (
                  <a key={phone} href={telHref(phone)}>
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-block">
              <Mail size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>

            <div className="contact-block">
              <Clock size={20} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h3>Business Hours</h3>
                <p>{company.hours.weekday}</p>
                <p>{company.hours.saturday}</p>
              </div>
            </div>
          </aside>

          <div>
            <h2>Contact Form</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section-dark map-section">
        <div className="container">
          <h2 className="section-title">Location</h2>
          <p className="map-caption">Head office in Cakung, East Jakarta</p>
          <MapEmbed />
          <a className="text-link on-dark" href={company.mapLink} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
      </section>

      <section className="section section-light">
        <div className="container faq-wrap">
          <h2 className="section-title on-light">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
