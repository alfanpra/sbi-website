# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are B2B procurement and buying staff (hotels, restaurants, catering, distributors) who need to evaluate PT Samudra Biru Indonesia as a supplier: credentials, product range, and how to request a quote.

Confirmed additional audiences: trade partners (suppliers, cooperatives, contract clients) and a public/talent audience seeking company awareness or a path to join.

Typical evaluation happens on a desktop monitor during office hours. The site must remain usable on tablet and phone.

## Product Purpose

A five-page company-profile site in Bahasa Indonesia that lets a visitor understand who the company is, what it trades, who operates it, and how to make contact.

Success: a serious buyer or partner can verify scope and contact details, send an inquiry, and leave with the impression of a credible trade operator — without needing a sales call first.

## Positioning

PT Samudra Biru Indonesia is a trade company whose licensed scope spans aquaculture, live and processed fisheries, F&B ingredients, contract procurement, and general wholesale. The claim a restaurant site or a single-commodity exporter could not copy: one counterpart for fisheries **and** broader trade, under a Jakarta-based operator.

Logo lockup claim (binding copy, not a product catalog page): `SEAFOOD | SPICES | BIRD'S NEST | EXPORT`.

## Operating Context

- Evaluation is institutional: credentials, scope of business, quality/cold-chain story, then contact.
- Language of the product is Bahasa Indonesia throughout.
- Headquarters: Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang, Kec. Cakung, Kota Jakarta Timur, DKI Jakarta 13950.
- Phones: 082376209524, 085863500002. Email: ptsamudrabiruindonesia@gmail.com.
- Hours: Senin–Jumat 08.00–17.00 WIB; Sabtu 08.00–12.00 WIB.
- Inquiry types: Penawaran Kerjasama, Pembelian Grosir, Pasokan Budidaya, Kemitraan Kontrak, Lainnya.
- No CMS, no account system, no newsletter. Contact form is visual-only (client validation + success state; no server).

## Capabilities and Constraints

**Shipped surfaces:** Beranda, Tentang Kami, Layanan, Tim, Hubungi Kami (`/`, `/about`, `/services`, `/team`, `/contact`).

**Stack in repo (not a greenfield choice):** React 18 + Vite + TypeScript, React Router v6 SPA, vanilla CSS custom properties, Lucide icons. Dev: `npm run dev`. Build: `npm run build`. Static files, host-agnostic.

**Must preserve as product copy** (from `PRD.md` / brief): company narrative, visi, six misi, five values, six bidang usaha, supply-chain stages, FAQ answers, contact block.

**Undecided / empty until the client supplies them:** team member names, bios, and photos (structure of 4–8 slots with jabatan titles exists). Official circular logo file is specified in the brief but is not in the repository; the current mark is a stand-in.

**Must not fabricate:** customer testimonials, named client logos, order volumes, certification numbers, pricing, or claims beyond the brief.

## Brand Commitments

- Legal name: PT Samudra Biru Indonesia.
- Tagline: _Perdagangan Terpercaya. Kemitraan Berkelanjutan._
- Voice keywords from the brief: institutional, maritime, robust. Tone: serious operator, not promotional hype.
- Official logo (when provided): circular mark with sail, water drop, gold waves, and bird; primary colors ocean blue and gold; logo tagline as above.
- Binding anti-patterns from the brief (product/identity constraints, not a visual system): no glassmorphism, gradient text, decorative numbered section chrome, image-transform hover, cream/sand body, or magazine-editorial tropes.

## Evidence on Hand

- Brief and copy: `PRD.md`.
- Real contact, address, hours, FAQ, visi/misi/nilai, and service descriptions as in the brief.
- Photography currently in `public/images/` is stock stand-in, not client photography. Future work must not present it as owned documentation of SBI facilities.
- No testimonials, press, case studies, or scanned certificates in the repo. Certification is named at the category level only (NIB, Izin Usaha, Sertifikat Kelayakan, SOP) without document files.
- Team records are empty placeholders.

## Product Principles

1. Trust before decoration — a buyer should be able to check who you are and how to reach you without hunting.
2. Scope is the product — six licensed bidang usaha and the supply chain are the argument, not slogans.
3. Do not invent proof — empty team slots and missing certificates stay honest until real assets arrive.
4. One language, one market frame — Bahasa Indonesia, B2B trade, Jakarta-based operator.
5. Contact is the conversion — quote / partnership inquiry is the job to be done; the form and the published numbers must stay accurate.

## Accessibility & Inclusion

WCAG AA contrast for body text (≥ 4.5:1) and large text (≥ 3:1), semantic landmarks, skip-to-content, labeled form fields, keyboard-operable FAQ and mobile nav, and `prefers-reduced-motion` honored. Touch targets ≥ 44×44px on small screens. Image `alt` in Bahasa Indonesia.
