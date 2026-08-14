import { Link } from 'react-router-dom';
import { company, navItems } from '../data/company';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-blurb">
            Mitra usaha terpercaya dalam budidaya, perdagangan, dan distribusi komoditas perikanan.
          </p>
          <p className="footer-tagline">{company.logoTagline}</p>
        </div>

        <div>
          <h2 className="footer-heading">Navigasi</h2>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Kontak</h2>
          <address className="footer-address">
            {company.address.street}
            <br />
            {company.address.district}
            <br />
            {company.address.city}
            <br />
            {company.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer-heading">Jam Operasional</h2>
          <p>{company.hours.weekday}</p>
          <p>{company.hours.saturday}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 {company.name}. Seluruh hak dilindungi.</p>
      </div>
    </footer>
  );
}
