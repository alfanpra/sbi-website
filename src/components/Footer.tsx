import { Link } from 'react-router-dom';
import { company, navItems } from '../data/company';
import { telHref } from '../data/seo';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-blurb">
            A company operating in the cultivation, trading, and distribution of fishery commodities and commercial products.
          </p>
          <p className="footer-tagline">{company.logoTagline}</p>
        </div>

        <div>
          <h2 className="footer-heading">Navigation</h2>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <address className="footer-address">
            {company.address.street}
            <br />
            {company.address.district}
            <br />
            {company.address.city}
            <br />
            {company.phones.map((phone) => (
              <a key={phone} href={telHref(phone)}>
                {phone}
              </a>
            ))}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>

        <div>
          <h2 className="footer-heading">Business Hours</h2>
          <p>{company.hours.weekday}</p>
          <p>{company.hours.saturday}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
