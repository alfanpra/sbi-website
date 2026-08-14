---
name: PT Samudra Biru Indonesia
description: Institutional B2B company profile — navy operator, gold as the seal.
colors:
  abyss: "oklch(0.15 0.04 240)"
  deep-ocean: "oklch(0.22 0.06 235)"
  ocean: "oklch(0.35 0.08 230)"
  current: "oklch(0.5 0.1 225)"
  trade-gold: "oklch(0.75 0.14 75)"
  trade-gold-dim: "oklch(0.6 0.1 75)"
  surface-light: "oklch(0.98 0.005 240)"
  surface-mid: "oklch(0.94 0.01 235)"
  ink: "oklch(0.18 0.02 240)"
  ink-muted: "oklch(0.4 0.03 235)"
  text-on-dark: "oklch(0.96 0.005 240)"
  text-on-dark-m: "oklch(0.82 0.02 235)"
  danger: "oklch(0.42 0.14 25)"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(2.8rem, 2rem + 3vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(2.2rem, 1.8rem + 2vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "clamp(0.85rem, 0.8rem + 0.25vw, 0.95rem)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  md: "0.5rem"
  full: "50%"
spacing:
  xs: "clamp(0.25rem, 0.2rem + 0.15vw, 0.5rem)"
  sm: "clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem)"
  md: "clamp(1rem, 0.8rem + 0.5vw, 1.5rem)"
  lg: "clamp(1.5rem, 1.2rem + 1vw, 2.5rem)"
  xl: "clamp(2.5rem, 2rem + 2vw, 4rem)"
  2xl: "clamp(4rem, 3rem + 3vw, 6rem)"
  3xl: "clamp(6rem, 4rem + 4vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.trade-gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.35rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.trade-gold-dim}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.35rem"
    height: "44px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.35rem"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.text-on-dark}"
    textColor: "{colors.deep-ocean}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.35rem"
    height: "44px"
  field:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.6rem 0.8rem"
    height: "44px"
  nav:
    backgroundColor: "{colors.deep-ocean}"
    textColor: "{colors.text-on-dark}"
    height: "4.5rem"
  field-tile:
    backgroundColor: "{colors.abyss}"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
---

# Design System: PT Samudra Biru Indonesia

## Overview

**Creative North Star: "The Deep-Water Desk"**

A procurement evaluation at 14:00 under office light. The visitor is sitting at a desk, not browsing a travel magazine. Navy is the room; photography sits behind a dark veil; type and facts do the briefing. Gold appears as a seal — a button, an active underline, an icon accent — never as atmosphere.

The system is refined and restrained. Chrome is quiet: one radius, two type families, a dark/light section rhythm. Density is institutional, not sparse-luxury and not dashboard-busy. Motion is short and purposeful (fade-up on the home hero only; accordion and drawer easing elsewhere) and yields entirely to `prefers-reduced-motion`.

Confirmed visual rejections: glassmorphism, gradient text, cream or sand body, decorative numbered section chrome, `transform` on image hover, and magazine-editorial tropes (serif display, oversized pull quotes as decoration, kicker/eyebrow as a gold label above every heading).

**Key Characteristics:**

- Navy operator identity; gold used sparingly as the seal
- Tonal depth: dark and light bands, not rest-state shadows
- Barlow display + Source Sans 3 body, Bahasa Indonesia throughout
- Photography behind veils; copy at the bottom of the first viewport
- 44px minimum interactive height; gold focus ring on light, inverted on gold buttons

## Colors

Cool navy family with a single warm gold accent. Light surfaces stay cool-white, never cream.

### Primary

- **Abyss** (`abyss`): Footer, CTA banner, field tiles — the darkest operator ground.
- **Deep Ocean** (`deep-ocean`): Solid nav, inner-page heroes, dark sections.
- **Ocean** (`ocean`): Mid navy for links, role labels, supply-chain icons, selection, and structural hairlines on dark.

### Secondary

- **Trade Gold** (`trade-gold`): Primary actions, skip link, active nav underline, icon accents. The seal.
- **Trade Gold Dim** (`trade-gold-dim`): Gold button hover; footer tagline. Hover keeps ink text, never light-on-dim-gold.

### Neutral

- **Surface Light** (`surface-light`): Default body and form fields.
- **Surface Mid** (`surface-mid`): Alternate light band, photo placeholders, form success.
- **Ink** (`ink`): Body text on light.
- **Ink Muted** (`ink-muted`): Supporting copy on light.
- **Text on Dark** (`text-on-dark`): Headings and primary copy on navy.
- **Text on Dark Muted** (`text-on-dark-m`): Leads and secondary copy on navy.
- **Danger** (`danger`): Invalid field borders and error copy only.

### Named Rules

**The Seal Rule.** Gold is a seal, not a fill. Use it on primary actions, one active indicator, and small icon accents. Never paint a section gold; never set gold as body text on light.

**The Cool Paper Rule.** Body and light sections stay cool-white (`surface-light` / `surface-mid`). Cream, sand, and warm ivory are out of system.

## Typography

**Display Font:** Barlow (sans-serif fallback)
**Body Font:** Source Sans 3 (sans-serif fallback)

**Character:** A serious operator pairing — condensed-enough display for institutional headlines, an open humanist body for long Bahasa Indonesia copy. No third family.

### Hierarchy

- **Display** (700, `--text-hero`, line-height 1.15, tracking −0.02em): Home hero title only.
- **Headline** (700, `--text-3xl`): Page titles (`h1`) and inner-page heroes.
- **Title** (700, `--text-2xl`): Section titles (`h2`), vision quote, CTA headings.
- **Body** (400, `--text-base`, line-height 1.6, max ~65ch): Running copy. Lede uses `--text-lg` in muted ink.
- **Label** (600, `--text-sm`): Nav links, form labels, footer headings, FAQ triggers.

### Named Rules

**The Two-Voice Rule.** Headings are Barlow. Running copy, labels, and UI chrome are Source Sans 3. Do not introduce a serif, a mono, or a third sans.

## Layout

Centered content column at `min(100% - 2×lg, 1200px)`. Section padding is `--space-3xl` on the block axis. Prose caps at 65ch; centered ledes at 48rem.

Rhythm is a dark/light band: full-bleed navy or abyss sections alternate with cool-white and mid-grey bands. Split layouts are two columns with `--space-2xl` gap, collapsing to one column at 1023px. Signature grids: six bidang usaha as an asymmetric 3-row mosaic; five values as a hairline-divided strip on dark; four supply-chain steps in a row.

Breakpoints observed: 1023px (grids collapse to two columns; hamburger not yet), 767px (nav drawer, single-column grids, transparent nav becomes solid navy). Nav height is 4.5rem, reserved as padding on heroes.

## Elevation & Depth

Tonal layering only at rest. Depth comes from the navy/light section rhythm, photography veils, and hairline borders (`ocean` on dark, a cool `oklch(0.88 0.01 235)` on light). Surfaces do not sit on drop shadows.

### Shadow Vocabulary

- **Field-tile hover** (`box-shadow: 0 12px 32px oklch(0.1 0.04 240 / 0.45)`): The only rest-to-hover lift. Interactive dark tiles only.

Hero depth is a bottom-weighted navy veil over photography (`linear-gradient` from ~0.96 opacity at the copy edge to ~0.28 at the top). Commodity tiles use a similar bottom scrim so labels remain readable. These are overlays, not shadows.

### Named Rules

**The Flat-at-Rest Rule.** No ambient card shadow. The one hover lift belongs to field tiles. Do not add rest shadows to people cards, FAQ rows, or form panels.

## Shapes

One corner language: 0.5rem (`--border-r`) on buttons, fields, media frames, tiles, photo wells, drawers, and map frames. Circles are reserved for supply-chain step icons (44px, 1px `ocean` stroke). No pills, no sharp rectangles, no organic blobs.

Hairlines are 1px. Nav active state is a 2px gold underline, not a pill. Form fields use a 1px cool stroke that shifts to `ocean` on focus and `danger` on invalid.

## Components

Quiet chrome. Interactive height is at least 44px. Focus-visible is a 2px `trade-gold` ring with 3px offset; gold buttons invert the ring to `text-on-dark`.

### Buttons

- **Shape:** Gently curved (0.5rem), no shadow, 600 weight.
- **Primary (gold):** `trade-gold` fill, `ink` text. Hover darkens to `trade-gold-dim` and keeps `ink` text.
- **Outline:** Transparent fill, `text-on-dark` stroke and type, for use on navy only. Hover fills with `text-on-dark` and sets type to `deep-ocean`.
- **Text link:** 600 weight, `ocean` on light / `trade-gold` on dark, 1px currentColor underline, 44px min-height.

### Cards / Containers

- **Field tile:** `abyss` fill, 0.5rem corners, `--space-lg` padding (`--space-xl` on the featured tile). Gold icon, light title, muted body. Hover lift only.
- **Media frame:** 4/3 crop, 0.5rem clip, `deep-ocean` fallback.
- **Person photo well:** 1:1, `surface-mid` fill, 1px cool hairline, initials in `ocean` until a photo exists. No rest shadow.
- **Commodity tile:** 4/3 photo with a bottom navy scrim and Barlow label in the lower-left.

### Inputs / Fields

- **Style:** Cool 1px stroke, `surface-light` fill, 0.5rem corners, 0.6rem 0.8rem padding, `ocean` caret.
- **Focus:** Border shifts to `ocean`; the global gold ring still applies.
- **Error:** Border and helper text use `danger`. `aria-invalid` and `aria-describedby` are required.
- **Success:** `surface-mid` band, not a green celebration.

### Navigation

- **Bar:** Fixed, 4.5rem. Transparent over the home hero until solid `deep-ocean` on scroll; always solid on inner pages and on small screens.
- **Links:** `--text-sm`, `text-on-dark`, 44px min-height. Active = 2px gold underline.
- **Mobile:** Hamburger at 767px; right drawer in `deep-ocean`; active drawer link fills `ocean`. Backdrop is a 0.55 navy veil.

### FAQ

Border-bottom hairline rows. Trigger is 600 weight, 56px min-height, no fill. Panel opens by grid-row, not by fading. Icon rotates 180°; motion yields to reduced-motion.

### CTA banner

Full-bleed `abyss`, centered title + gold button. The conversion band after a briefing, not a floating card.

## Do's and Don'ts

### Do:

- **Do** treat gold as the seal: primary button, active nav, small icon accents.
- **Do** alternate navy and cool-white bands for depth instead of shadows.
- **Do** keep interactive targets at least 44×44px and honor `prefers-reduced-motion`.
- **Do** veil photography so type at the bottom of the viewport stays readable.
- **Do** keep factual copy, empty team slots, and missing certificates honest.

### Don't:

- **Don't** use glassmorphism, gradient text, cream/sand body, or magazine-editorial tropes.
- **Don't** paint sections gold or set gold as running text on light.
- **Don't** add rest-state drop shadows to cards, people, or forms.
- **Don't** `transform` images on hover, or use numbered chrome as decoration.
- **Don't** invent a third typeface, kickers/eyebrows as gold labels, or promotional metrics in the hero.
