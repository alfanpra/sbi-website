import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';

const titles: Record<string, string> = {
  '/': 'PT Samudra Biru Indonesia',
  '/about': 'Tentang Kami — PT Samudra Biru Indonesia',
  '/services': 'Layanan — PT Samudra Biru Indonesia',
  '/team': 'Tim — PT Samudra Biru Indonesia',
  '/contact': 'Hubungi Kami — PT Samudra Biru Indonesia',
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? 'PT Samudra Biru Indonesia';
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
