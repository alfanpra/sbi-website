import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import SupplyChainFlow from '../components/SupplyChainFlow';
import CtaBanner from '../components/CtaBanner';
import ResponsiveImage from '../components/ResponsiveImage';
import { images } from '../data/images';
import { commodities, qualityAssurance, services } from '../data/services';

export default function Services() {
  return (
    <>
      <PageHero
        title="Business Areas"
        subtitle="Integrated Trading Reach Aligned with Market Needs"
        image={images.coldChain}
      />

      <section className="section section-light intro-split">
        <div className="container intro-split-grid">
          <p className="lede">
            We build our trading operations by connecting product sources, suppliers, procurement processes, and distribution to customers in an integrated manner.
            With a broad scope of business, we have the flexibility to tailor trading solutions — whether in terms of commodity type, volume, specifications, or partnership model — to the specific needs of each partner.
          </p>
          <ul className="intro-scope">
            {services.map((service) => (
              <li key={service.id}>{service.short}</li>
            ))}
          </ul>
        </div>
      </section>

      {services.map((service, index) => {
        const dark = index % 2 === 1;
        return (
          <section key={service.id} className={`section ${dark ? 'section-dark' : 'section-light'}`}>
            <div className={`container split ${index % 2 === 1 ? 'split-reverse' : ''}`}>
              <ScrollReveal>
                <figure className="media-frame">
                  <ResponsiveImage
                    image={service.image}
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </figure>
              </ScrollReveal>
              <ScrollReveal>
                <div className="prose">
                  <h2>{service.title}</h2>
                  <p>{service.body}</p>
                  <Link to="/contact" className="btn btn-gold">
                    Request a Quote
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      <section className="section section-mid">
        <div className="container">
          <h2 className="section-title on-light">Supply Chain</h2>
          <SupplyChainFlow />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Featured Commodities</h2>
          <ul className="commodity-grid">
            {commodities.map((item) => (
              <li key={item.id}>
                <ResponsiveImage
                  image={item.image}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split">
          <ScrollReveal>
            <div className="prose">
              <h2>Quality Assurance</h2>
              <p>{qualityAssurance}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <figure className="media-frame">
              <ResponsiveImage image={images.facility} sizes="(max-width: 1023px) 100vw, 50vw" />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner heading="Need a Custom Quote?" label="Contact Us" />
    </>
  );
}
