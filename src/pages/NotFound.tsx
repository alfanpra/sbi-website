import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-hero" aria-labelledby="not-found-title">
      <div className="hero-veil" />
      <div className="container page-hero-inner not-found">
        <h1 id="not-found-title">Halaman tidak ditemukan</h1>
        <p>Alamat yang dibuka tidak ada di situs ini. Periksa tautan, atau kembali ke beranda.</p>
        <Link to="/" className="btn btn-gold">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
