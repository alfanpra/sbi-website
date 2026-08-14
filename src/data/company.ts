import type { NavItem } from '../types';

export const company = {
  name: 'PT Samudra Biru Indonesia',
  tagline: 'Perdagangan Terpercaya. Kemitraan Berkelanjutan.',
  logoTagline: "SEAFOOD | SPICES | BIRD'S NEST | EXPORT",
  shortDescription:
    'Mitra usaha terpercaya dalam budidaya, perdagangan, dan distribusi komoditas perikanan serta berbagai produk perdagangan.',
  address: {
    street: 'Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang',
    district: 'Kec. Cakung, Kota Jakarta Timur',
    city: 'DKI Jakarta 13950',
    full: 'Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang, Kec. Cakung, Kota Jakarta Timur, DKI Jakarta 13950',
  },
  phones: ['082376209524', '085863500002'],
  email: 'ptsamudrabiruindonesia@gmail.com',
  hours: {
    weekday: 'Senin–Jumat 08.00–17.00 WIB',
    saturday: 'Sabtu 08.00–12.00 WIB',
  },
  mapEmbed:
    'https://maps.google.com/maps?q=Jl.+Sentra+Primer+No.60,+Pulo+Gebang,+Cakung,+Jakarta+Timur&hl=id&z=16&ie=UTF8&iwloc=&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Jl.+Sentra+Primer+No.60+Pulo+Gebang+Cakung+Jakarta+Timur',
} as const;

export const navItems: NavItem[] = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
  { to: '/team', label: 'Tim' },
  { to: '/contact', label: 'Hubungi Kami' },
];
