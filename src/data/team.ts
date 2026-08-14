import type { Division, TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '',
    position: 'Direktur Utama',
    bio: 'Visi strategis dan tata kelola korporat.',
    photo: null,
    featured: true,
  },
  {
    id: 2,
    name: '',
    position: 'Direktur Operasional',
    bio: 'Operasional harian, logistik, dan rantai pasokan.',
    photo: null,
    featured: false,
  },
  {
    id: 3,
    name: '',
    position: 'Kepala Divisi Budidaya',
    bio: 'Operasi budidaya dan perikanan berkelanjutan.',
    photo: null,
    featured: false,
  },
  {
    id: 4,
    name: '',
    position: 'Kepala Divisi Perdagangan',
    bio: 'Kemitraan dagang, operasi grosir, dan ekspansi pasar.',
    photo: null,
    featured: false,
  },
  {
    id: 5,
    name: '',
    position: 'Kepala Divisi Mutu',
    bio: 'Jaminan mutu, cold-chain, dan sertifikasi.',
    photo: null,
    featured: false,
  },
];

export const divisions: Division[] = [
  {
    id: 'budidaya',
    title: 'Budidaya',
    body: 'Mengelola lokasi budidaya ikan bersirip dan biota air laut, termasuk perencanaan produksi, pemantauan mutu air, dan panen sesuai jadwal pasar.',
  },
  {
    id: 'trade',
    title: 'Perdagangan & Logistik',
    body: 'Menghubungkan pemasok dan pembeli grosir, mengatur cold chain, dan memastikan pengiriman tepat waktu ke jaringan mitra di dalam dan luar kota.',
  },
  {
    id: 'qa',
    title: 'Jaminan Mutu',
    body: 'Menegakkan SOP, inspeksi batch, dan kelengkapan izin serta sertifikasi agar setiap kiriman dapat ditelusuri dan memenuhi spesifikasi pembeli.',
  },
  {
    id: 'bd',
    title: 'Pengembangan Bisnis',
    body: 'Membangun kemitraan baru, kontrak pengadaan, dan perluasan komoditas di luar perikanan sesuai kebutuhan mitra usaha.',
  },
];
