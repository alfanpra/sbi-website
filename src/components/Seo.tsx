import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getSiteUrl,
  jsonLdGraph,
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  pageSeo,
  SITE_NAME,
} from '../data/seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(data: unknown) {
  const id = 'sbi-jsonld';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pageSeo(pathname);
    const site = getSiteUrl();
    const canonical = `${site}${page.path || pathname}`;
    const ogImage = site ? `${site}${OG_IMAGE_PATH}` : OG_IMAGE_PATH;
    const robots = page.index ? 'index, follow' : 'noindex, nofollow';

    document.title = page.title;
    upsertMeta('name', 'description', page.description);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:locale', 'id_ID');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', page.title);
    upsertMeta('property', 'og:description', page.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:alt', OG_IMAGE_ALT);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', page.title);
    upsertMeta('name', 'twitter:description', page.description);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertLink('canonical', canonical);
    upsertJsonLd(jsonLdGraph(pathname));
  }, [pathname]);

  return null;
}
