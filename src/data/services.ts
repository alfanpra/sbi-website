import type { Commodity, Service, SupplyChainStep } from '../types';
import { images } from './images';

export const services: Service[] = [
  {
    id: 'budidaya',
    title: 'Finfish & Marine Aquaculture',
    short: 'Aquaculture',
    body: 'We develop finfish and marine aquaculture operations with a professional approach — focused on product quality and long-term sustainability.',
    image: images.aquaculture,
  },
  {
    id: 'ikan-hidup',
    title: 'Wholesale Live Fish & Aquatic Organisms',
    short: 'Live Trade',
    body: 'We supply live fish and aquatic organisms through a reliable network of suppliers capable of supporting consistent, large-scale demand.',
    image: images.fishMarket,
  },
  {
    id: 'produk-perikanan',
    title: 'Fishery Products & Commodities',
    short: 'Fishery Products',
    body: 'We trade a wide variety of fishery commodities and products with close attention to quality, freshness, food safety, and specific customer requirements.',
    image: images.frozenSeafood,
  },
  {
    id: 'fnb',
    title: 'Food & Beverage Commodities',
    short: 'F&B Commodities',
    body: 'We serve the food and beverage supply needs of various business sectors, with sourcing that adapts to market dynamics.',
    image: images.fnb,
  },
  {
    id: 'kontrak',
    title: 'Contract-Based Trading',
    short: 'Contract Trade',
    body: 'We provide trading and procurement solutions structured around specific agreements, specifications, and the unique needs of each business partner.',
    image: images.teamCorporate,
  },
  {
    id: 'barang-umum',
    title: 'General Merchandise',
    short: 'General Goods',
    body: 'We extend our trading capabilities to meet general commodity needs beyond the fisheries sector.',
    image: images.generalGoods,
  },
];

export const supplyChain: SupplyChainStep[] = [
  {
    id: 'pengadaan',
    title: 'Procurement',
    body: 'Connecting market demand with the right product sources and suppliers.',
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain',
    body: 'Preserving product condition through temperature-controlled storage and transportation tailored to commodity requirements.',
  },
  {
    id: 'inspeksi',
    title: 'Inspection',
    body: 'Ensuring product quality is verified and maintained before entering the distribution stage.',
  },
  {
    id: 'distribusi',
    title: 'Distribution',
    body: 'Managing product delivery to reach partners in accordance with requirements and agreed terms.',
  },
];

export const commodities: Commodity[] = [
  { id: 'live', title: 'Live Fish', image: images.liveFish },
  { id: 'frozen', title: 'Frozen Seafood', image: images.frozenSeafood },
  { id: 'fnb', title: 'F&B Supplies', image: images.fnb },
  { id: 'general', title: 'General Goods', image: images.generalGoods },
];

export const qualityAssurance =
  'Quality is inseparable from every trading activity at PT Samudra Biru Indonesia. We pay close attention to every stage — procurement, handling, inspection, storage, and distribution — to ensure product condition is maintained to the required standards. In fishery product trading, cold chain systems and temperature-controlled storage facilities are part of our commitment to preserving product freshness and quality throughout the distribution process.';