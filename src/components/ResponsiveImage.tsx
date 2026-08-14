import type { ImageAsset } from '../types';

const STEPS = [640, 960, 1280, 1920];

function webpSrcset(src: string, width: number): string {
  const base = src.replace(/\.(jpe?g|png)$/i, '');
  const entries = STEPS.filter((step) => step < width).map((step) => `${base}-${step}.webp ${step}w`);
  entries.push(`${base}.webp ${width}w`);
  return entries.join(', ');
}

type ResponsiveImageProps = {
  image: ImageAsset;
  className?: string;
  sizes: string;
  priority?: boolean;
  eager?: boolean;
  decorative?: boolean;
};

export default function ResponsiveImage({
  image,
  className,
  sizes,
  priority = false,
  eager = false,
  decorative = false,
}: ResponsiveImageProps) {
  const immediate = priority || eager;
  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcset(image.src, image.width)} sizes={sizes} />
      <img
        className={className}
        src={image.src}
        alt={decorative ? '' : image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={immediate ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
