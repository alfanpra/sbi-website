import type { Commodity, Service, SupplyChainStep } from '../types';
import { images } from './images';

export const services: Service[] = [
  {
    id: 'budidaya',
    title: 'Budidaya Ikan Bersirip & Biota Air Laut',
    short: 'Budidaya',
    body: 'Kami mengembangkan kegiatan budidaya ikan bersirip dan biota air laut secara profesional di berbagai lokasi budidaya strategis. Dengan pendekatan berkelanjutan dan penerapan standar mutu yang ketat, kami memastikan setiap hasil budidaya memenuhi kebutuhan pasar domestik maupun internasional.',
    image: images.aquaculture,
  },
  {
    id: 'ikan-hidup',
    title: 'Perdagangan Besar Ikan & Biota Air Hidup',
    short: 'Perdagangan Besar',
    body: 'Sebagai pedagang besar ikan dan biota air hidup, kami menyediakan akses langsung ke sumber daya perikanan berkualitas. Jaringan pemasok kami yang luas memungkinkan pasokan yang konsisten dengan standar kesegaran dan keamanan pangan yang terjamin.',
    image: images.fishMarket,
  },
  {
    id: 'produk-perikanan',
    title: 'Perdagangan Produk & Hasil Perikanan',
    short: 'Produk Perikanan',
    body: 'Dari ikan segar hingga produk olahan perikanan, kami memperdagangkan berbagai komoditas hasil laut dengan sistem distribusi berpendingin (cold chain) yang menjaga kualitas dari titik produksi hingga ke tangan pelanggan.',
    image: images.frozenSeafood,
  },
  {
    id: 'fnb',
    title: 'Perdagangan Besar Bahan Makanan & Minuman',
    short: 'Makanan & Minuman',
    body: 'Kami memperluas jangkauan usaha ke sektor perdagangan bahan makanan dan minuman, melayani kebutuhan restoran, hotel, katering, dan industri pengolahan makanan dengan pasokan yang andal dan harga yang kompetitif.',
    image: images.fnb,
  },
  {
    id: 'kontrak',
    title: 'Perdagangan Atas Dasar Balas Jasa atau Kontrak',
    short: 'Kontrak & Jasa',
    body: 'Melalui layanan perdagangan berbasis kontrak, kami menjadi mitra pengadaan terpercaya bagi perusahaan yang membutuhkan solusi procurement menyeluruh — dari identifikasi pemasok hingga pengiriman barang sesuai spesifikasi.',
    image: images.teamCorporate,
  },
  {
    id: 'barang-umum',
    title: 'Perdagangan Besar Berbagai Macam Barang',
    short: 'Berbagai Barang',
    body: 'Dengan izin usaha perdagangan besar, kami juga melayani kebutuhan komoditas umum di luar sektor perikanan, memberikan fleksibilitas bagi mitra usaha yang membutuhkan satu titik kontak untuk berbagai kebutuhan pengadaan.',
    image: images.generalGoods,
  },
];

export const supplyChain: SupplyChainStep[] = [
  {
    id: 'pengadaan',
    title: 'Pengadaan',
    body: 'Sumber langsung dari budidaya, koperasi nelayan, dan pemasok tersertifikasi.',
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain',
    body: 'Penyimpanan dan armada berpendingin menjaga suhu dari gudang hingga pengiriman.',
  },
  {
    id: 'inspeksi',
    title: 'Inspeksi',
    body: 'Pemeriksaan mutu, kesegaran, dan kelengkapan dokumen pada setiap batch.',
  },
  {
    id: 'distribusi',
    title: 'Distribusi',
    body: 'Pengiriman terjadwal ke hotel, restoran, industri, dan mitra dagang.',
  },
];

export const commodities: Commodity[] = [
  { id: 'live', title: 'Ikan Hidup', image: images.liveFish },
  { id: 'frozen', title: 'Seafood Beku', image: images.frozenSeafood },
  { id: 'fnb', title: 'Bahan F&B', image: images.fnb },
  { id: 'general', title: 'Barang Umum', image: images.generalGoods },
];

export const qualityAssurance =
  'Standar mutu kami mencakup penanganan suhu terkontrol, dokumentasi asal barang, dan pemeriksaan visual serta organoleptik sebelum pengiriman. Fasilitas mitra cold storage dan SOP internal memastikan setiap komoditas sampai dalam kondisi yang sesuai spesifikasi pembeli.';
