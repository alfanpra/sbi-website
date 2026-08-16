import type { NavItem } from '../types';

export const company = {
  name: 'PT Samudra Biru Indonesia',
  tagline: 'Trusted Trade. Lasting Partnerships.',
  logoTagline: "SEAFOOD | SPICES | BIRD'S NEST | EXPORT",
  shortDescription:
    'Your business partner in the cultivation, trading, and distribution of fishery commodities and a wide range of commercial goods.',
  address: {
    street: 'Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang',
    district: 'Kec. Cakung, Kota Jakarta Timur',
    city: 'DKI Jakarta 13950',
    full: 'Jl. Sentra Primer No.60 RT.13/RW.8, Pulo Gebang, Kec. Cakung, Kota Jakarta Timur, DKI Jakarta 13950',
  },
  phones: ['082376209524', '085863500002'],
  email: 'ptsamudrabiruindonesia@gmail.com',
  hours: {
    weekday: 'Monday–Friday 08.00–17.00 WIB',
    saturday: 'Saturday 08.00–12.00 WIB',
  },
  mapEmbed:
    'https://maps.google.com/maps?q=Jl.+Sentra+Primer+No.60,+Pulo+Gebang,+Cakung,+Jakarta+Teamur&hl=id&z=16&ie=UTF8&iwloc=&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Jl.+Sentra+Primer+No.60+Pulo+Gebang+Cakung+Jakarta+Teamur',
} as const;

export const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact Us' },
];
