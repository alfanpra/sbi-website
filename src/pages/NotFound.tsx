import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-hero" aria-labelledby="not-found-title">
      <video src="/images/background.webm" className="page-hero-img" autoPlay loop muted playsInline />
      <div className="hero-veil" />
      <div className="container page-hero-inner not-found">
        <h1 id="not-found-title">Page not found</h1>
        <p>The requested page does not exist. Check the link, or return to home.</p>
        <Link to="/" className="btn btn-gold">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
