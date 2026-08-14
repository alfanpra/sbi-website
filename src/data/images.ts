import type { ImageAsset } from '../types';

export const images = {
  heroOcean: {
    src: '/images/hero-ocean.jpg',
    alt: 'Permukaan samudra biru dari udara saat cahaya fajar',
  },
  aquaculture: {
    src: '/images/aquaculture.jpg',
    alt: 'Perairan tropis dengan perahu nelayan di lokasi budidaya',
  },
  fishMarket: {
    src: '/images/fish-market.jpg',
    alt: 'Ikan segar disortir di pasar grosir profesional',
  },
  coldChain: {
    src: '/images/cold-chain.jpg',
    alt: 'Gudang logistik dengan peti barang siap didistribusikan',
  },
  qualityInspection: {
    src: '/images/quality.jpg',
    alt: 'Inspeksi kualitas seafood yang disusun di atas es',
  },
  teamCorporate: {
    src: '/images/team.jpg',
    alt: 'Tim profesional berdiskusi di ruang kerja modern',
  },
  jakartaOffice: {
    src: '/images/jakarta.jpg',
    alt: 'Kawasan gedung komersial modern di Jakarta',
  },
  liveFish: {
    src: '/images/live-fish.jpg',
    alt: 'Ikan hidup di perairan jernih',
  },
  frozenSeafood: {
    src: '/images/frozen.jpg',
    alt: 'Seafood beku dan segar siap distribusi',
  },
  fnb: {
    src: '/images/fnb.jpg',
    alt: 'Bahan makanan dan rempah untuk industri F&B',
  },
  generalGoods: {
    src: '/images/goods.jpg',
    alt: 'Gudang perdagangan barang umum',
  },
  facility: {
    src: '/images/quality.jpg',
    alt: 'Fasilitas penanganan dan inspeksi hasil perikanan',
  },
  network: {
    src: '/images/network.jpg',
    alt: 'Armada dan jaringan logistik pelayaran',
  },
} as const satisfies Record<string, ImageAsset>;
