import { company } from "./company";
import { faqs } from "./faq";

export const SITE_NAME = company.name;
export const OG_IMAGE_PATH = "/og.jpg";
export const OG_IMAGE_ALT = "Permukaan samudra biru saat fajar — PT Samudra Biru Indonesia";
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
    title: "PT Samudra Biru Indonesia — Perdagangan Terpercaya",
    description:
      "Mitra usaha budidaya, perdagangan, dan distribusi komoditas perikanan serta bahan makanan. Kantor di Cakung, Jakarta Timur.",
    index: true,
  },
  "/about": {
    path: "/about",
    title: "Tentang Kami — PT Samudra Biru Indonesia",
    description:
      "Profil, visi, misi, dan nilai PT Samudra Biru Indonesia — operator perdagangan perikanan dan komoditas berbasis Jakarta Timur.",
    index: true,
  },
  "/services": {
    path: "/services",
    title: "Layanan & Bidang Usaha — PT Samudra Biru Indonesia",
    description:
      "Enam bidang usaha: budidaya, ikan hidup, produk perikanan, bahan F&B, perdagangan kontrak, dan barang umum — satu mitra pengadaan.",
    index: true,
  },
  "/team": {
    path: "/team",
    title: "Tim — PT Samudra Biru Indonesia",
    description:
      "Struktur kepemimpinan dan divisi PT Samudra Biru Indonesia. Hubungi kami untuk kemitraan atau peluang bergabung.",
    index: true,
  },
  "/contact": {
    path: "/contact",
    title: "Hubungi Kami — PT Samudra Biru Indonesia",
    description:
      "Kantor Cakung, Jakarta Timur. Telepon, email, jam kerja, dan formulir permintaan penawaran PT Samudra Biru Indonesia.",
    index: true,
  },
};

export const notFoundPage: SeoPage = {
  path: "",
  title: "Halaman tidak ditemukan — PT Samudra Biru Indonesia",
  description: "Alamat yang dibuka tidak ada di situs PT Samudra Biru Indonesia.",
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
      addressLocality: "Jakarta Timur",
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
    inLanguage: "id-ID",
    isPartOf: { "@id": site ? `${site}/#website` : "#website" },
    about: { "@id": site ? `${site}/#organization` : "#organization" },
  };

  const website: JsonLd = {
    "@type": "WebSite",
    "@id": site ? `${site}/#website` : "#website",
    url: site || undefined,
    name: company.name,
    inLanguage: "id-ID",
    publisher: { "@id": site ? `${site}/#organization` : "#organization" },
  };

  const crumbs = [{ name: "Beranda", path: "/" }];
  if (pathname === "/about") crumbs.push({ name: "Tentang Kami", path: "/about" });
  if (pathname === "/services") crumbs.push({ name: "Layanan", path: "/services" });
  if (pathname === "/team") crumbs.push({ name: "Tim", path: "/team" });
  if (pathname === "/contact") crumbs.push({ name: "Hubungi Kami", path: "/contact" });

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
