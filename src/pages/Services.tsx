import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import SupplyChainFlow from '../components/SupplyChainFlow';
import CtaBanner from '../components/CtaBanner';
import { images } from '../data/images';
import { commodities, qualityAssurance, services } from '../data/services';

export default function Services() {
  return (
    <>
      <PageHero
        title="Bidang Usaha"
        subtitle="Jangkauan layanan perdagangan dan distribusi"
        image={images.coldChain}
      />

      <section className="section section-light intro-split">
        <div className="container intro-split-grid">
          <p className="lede">
            Dari budidaya hingga perdagangan besar, kami menanggung pengadaan komoditas perikanan,
            bahan makanan, dan barang umum melalui satu mitra yang dapat dihubungi langsung.
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
                  <img src={service.image.src} alt={service.image.alt} />
                </figure>
              </ScrollReveal>
              <ScrollReveal>
                <div className="prose">
                  <h2>{service.title}</h2>
                  <p>{service.body}</p>
                  <Link to="/contact" className="btn btn-gold">
                    Minta Penawaran
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      <section className="section section-mid">
        <div className="container">
          <h2 className="section-title on-light">Rantai Pasokan</h2>
          <SupplyChainFlow />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Komoditas Unggulan</h2>
          <ul className="commodity-grid">
            {commodities.map((item) => (
              <li key={item.id}>
                <img src={item.image.src} alt={item.image.alt} />
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
              <h2>Jaminan Mutu</h2>
              <p>{qualityAssurance}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <figure className="media-frame">
              <img src={images.facility.src} alt={images.facility.alt} />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner heading="Butuh Penawaran Khusus?" label="Hubungi Kami" />
    </>
  );
}
