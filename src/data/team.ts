import type { Division, TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '',
    position: 'President Director',
    bio: 'Strategic vision and corporate governance.',
    photo: null,
    featured: true,
  },
  {
    id: 2,
    name: '',
    position: 'Operational Director',
    bio: 'Daily operations, logistics, and supply chain.',
    photo: null,
    featured: false,
  },
  {
    id: 3,
    name: '',
    position: 'Head of Aquaculture Division',
    bio: 'Aquaculture operations and sustainable fisheries.',
    photo: null,
    featured: false,
  },
  {
    id: 4,
    name: '',
    position: 'Head of Trading Division',
    bio: 'Trade partnerships, wholesale operations, and market expansion.',
    photo: null,
    featured: false,
  },
  {
    id: 5,
    name: '',
    position: 'Head of Quality Division',
    bio: 'Quality assurance, cold-chain, and certification.',
    photo: null,
    featured: false,
  },
];

export const divisions: Division[] = [
  {
    id: 'budidaya',
    title: 'Aquaculture',
    body: 'Managing and developing fish and marine aquaculture operations — with a focus on product quality, operational efficiency, and business sustainability.',
  },
  {
    id: 'trade',
    title: 'Trading & Logistics',
    body: 'Handling trading activities, procurement, distribution, and supply chain coordination to ensure customer needs are met effectively and on time.',
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    body: 'Overseeing product quality, handling processes, cold chain systems, and compliance with applicable standards and requirements.',
  },
  {
    id: 'bd',
    title: 'Business Development',
    body: 'Expanding trading networks, exploring market opportunities, building strategic partnerships, and opening new pathways for business growth.',
  },
];