import type { ImageAsset } from '../types';
import ResponsiveImage from './ResponsiveImage';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: ImageAsset;
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      {image && (
        <ResponsiveImage
          image={image}
          className="page-hero-img"
          sizes="100vw"
          eager
          decorative
        />
      )}
      <div className="hero-veil" />
      <div className="container page-hero-inner">
        <h1 id="page-hero-title">{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
