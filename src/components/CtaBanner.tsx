import { Link } from 'react-router-dom';

type CtaBannerProps = {
  heading: string;
  to?: string;
  label?: string;
};

export default function CtaBanner({
  heading,
  to = '/contact',
  label = 'Hubungi Kami',
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <h2>{heading}</h2>
        <Link to={to} className="btn btn-gold">
          {label}
        </Link>
      </div>
    </section>
  );
}
