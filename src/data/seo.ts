import { company } from "./company";
import { faqs } from "./faq";

export const SITE_NAME = company.name;
export const OG_IMAGE_PATH = "/og.jpg";
export const OG_IMAGE_ALT = "Blue ocean surface at dawn — PT Samudra Biru Indonesia";
export const LOGO_PATH = "/icon-512.png";

export const ROUTES = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/services", priority: "0.8" },
  { path: "/team", priority: "0.6" },
  { path: "/contact", priority: "0.9" },
] as const;

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  index: boolean;
};

export const pages: Record<string, SeoPage> = {
  "/": {
    path: "/",
    title: "PT Samudra Biru Indonesia — Trusted Trade",
    description:
      "Your business partner in cultivation, trading, and distribution of fishery commodities and food supplies. Based in Cakung, East Jakarta.",
    index: true,
  },
  "/about": {
    path: "/about",
    title: "About Us — PT Samudra Biru Indonesia",
    description:
      "Profile, vision, mission, and values of PT Samudra Biru Indonesia — a fishery and commodity trading operator based in East Jakarta.",
    index: true,
  },
  "/services": {
    path: "/services",
    title: "Services & Business Areas — PT Samudra Biru Indonesia",
    description:
      "Six business areas: aquaculture, live fish, fishery products, F&B supplies, contract trading, and general merchandise — one procurement partner.",
    index: true,
  },
  "/team": {
    path: "/team",
    title: "Team — PT Samudra Biru Indonesia",
    description:
      "Leadership structure and divisions of PT Samudra Biru Indonesia. Contact us for partnerships or collaboration opportunities.",
    index: true,
  },
  "/contact": {
    path: "/contact",
    title: "Contact Us — PT Samudra Biru Indonesia",
    description:
      "Cakung office, East Jakarta. Phone, email, business hours, and inquiry form for PT Samudra Biru Indonesia.",
    index: true,
  },
};

export const notFoundPage: SeoPage = {
  path: "",
  title: "Page not found — PT Samudra Biru Indonesia",
  description: "The requested page does not exist on the PT Samudra Biru Indonesia website.",
  index: false,
};

export function getSiteUrl(): string {
  const env = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (env) return env;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return `tel:+62${digits.slice(1)}`;
  if (digits.startsWith("62")) return `tel:+${digits}`;
  return `tel:+${digits}`;
}

export function e164(phone: string): string {
  return telHref(phone).replace(/^tel:/, "");
}

export function pageSeo(pathname: string): SeoPage {
  return pages[pathname] ?? { ...notFoundPage, path: pathname };
}

type JsonLd = Record<string, unknown>;

export function jsonLdGraph(pathname: string): JsonLd {
  const site = getSiteUrl();
  const page = pageSeo(pathname);
  const canonical = site ? `${site}${page.path || pathname}` : page.path || pathname;
  const ogImage = site ? `${site}${OG_IMAGE_PATH}` : OG_IMAGE_PATH;

  const organization: JsonLd = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": site ? `${site}/#organization` : "#organization",
    name: company.name,
    legalName: company.name,
    slogan: company.tagline,
    description: company.shortDescription,
    url: site || undefined,
    email: company.email,
    telephone: company.phones.map(e164),
    image: ogImage,
    logo: {
      "@type": "ImageObject",
      url: site ? `${site}${LOGO_PATH}` : LOGO_PATH,
      width: 512,
      height: 512,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang",
      addressLocality: "East Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "13950",
      addressCountry: "ID",
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
  };

  const webPage: JsonLd = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": site ? `${site}/#website` : "#website" },
    about: { "@id": site ? `${site}/#organization` : "#organization" },
  };

  const website: JsonLd = {
    "@type": "WebSite",
    "@id": site ? `${site}/#website` : "#website",
    url: site || undefined,
    name: company.name,
    inLanguage: "en-US",
    publisher: { "@id": site ? `${site}/#organization` : "#organization" },
  };

  const crumbs = [{ name: "Home", path: "/" }];
  if (pathname === "/about") crumbs.push({ name: "About Us", path: "/about" });
  if (pathname === "/services") crumbs.push({ name: "Services", path: "/services" });
  if (pathname === "/team") crumbs.push({ name: "Team", path: "/team" });
  if (pathname === "/contact") crumbs.push({ name: "Contact Us", path: "/contact" });

  const breadcrumb: JsonLd = {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: site ? `${site}${crumb.path}` : crumb.path,
    })),
  };

  const graph: JsonLd[] = [organization, website, webPage, breadcrumb];

  if (pathname === "/contact") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}