import type { ImageAsset } from '../types';

export const images = {
  heroOcean: {
    src: '/images/hero-ocean.jpg',
    alt: 'Permukaan samudra biru dari udara saat cahaya fajar',
    width: 2400,
    height: 1600,
  },
  aquaculture: {
    src: '/images/aquaculture.jpg',
    alt: 'Perairan tropis dengan perahu nelayan di lokasi budidaya',
    width: 1400,
    height: 933,
  },
  fishMarket: {
    src: '/images/fish-market.jpg',
    alt: 'Ikan segar disortir di pasar grosir profesional',
    width: 1400,
    height: 933,
  },
  coldChain: {
    src: '/images/cold-chain.jpg',
    alt: 'Gudang logistik dengan peti barang siap didistribusikan',
    width: 1400,
    height: 933,
  },
  qualityInspection: {
    src: '/images/quality.jpg',
    alt: 'Inspeksi kualitas seafood yang disusun di atas es',
    width: 1400,
    height: 934,
  },
  teamCorporate: {
    src: '/images/team.jpg',
    alt: 'Tim profesional berdiskusi di ruang kerja modern',
    width: 1600,
    height: 2399,
  },
  jakartaOffice: {
    src: '/images/jakarta.jpg',
    alt: 'Kawasan gedung komersial modern di Jakarta',
    width: 1600,
    height: 1067,
  },
  liveFish: {
    src: '/images/live-fish.jpg',
    alt: 'Ikan hidup di perairan jernih',
    width: 900,
    height: 600,
  },
  frozenSeafood: {
    src: '/images/frozen.jpg',
    alt: 'Seafood beku dan segar siap distribusi',
    width: 900,
    height: 675,
  },
  fnb: {
    src: '/images/fnb.jpg',
    alt: 'Bahan makanan dan rempah untuk industri F&B',
    width: 900,
    height: 600,
  },
  generalGoods: {
    src: '/images/goods.jpg',
    alt: 'Gudang perdagangan barang umum',
    width: 900,
    height: 1200,
  },
  facility: {
    src: '/images/quality.jpg',
    alt: 'Fasilitas penanganan dan inspeksi hasil perikanan',
    width: 1400,
    height: 934,
  },
  network: {
    src: '/images/network.jpg',
    alt: 'Armada dan jaringan logistik pelayaran',
    width: 1400,
    height: 933,
  },
} as const satisfies Record<string, ImageAsset>;
