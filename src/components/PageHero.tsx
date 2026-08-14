import type { ImageAsset } from '../types';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: ImageAsset;
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      {image && (
        <img className="page-hero-img" src={image.src} alt="" width={1600} height={900} />
      )}
      <div className="container page-hero-inner">
        <h1 id="page-hero-title">{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
