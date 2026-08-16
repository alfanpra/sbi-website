import type { ImageAsset } from '../types';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: ImageAsset;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <video src="/images/background.webm" className="page-hero-img" autoPlay loop muted playsInline />
      <div className="hero-veil" />
      <div className="container page-hero-inner">
        <h1 id="page-hero-title">{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
