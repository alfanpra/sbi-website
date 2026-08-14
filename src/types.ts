export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  to: string;
  label: string;
};

export type ValueId =
  | 'integrity'
  | 'quality'
  | 'professionalism'
  | 'partnership'
  | 'sustainability';

export type CompanyValue = {
  id: ValueId;
  name: string;
  nameId: string;
  description: string;
};

export type Mission = {
  number: number;
  title: string;
  body: string;
};

export type Service = {
  id: string;
  title: string;
  short: string;
  body: string;
  image: ImageAsset;
};

export type SupplyChainId = 'pengadaan' | 'cold-chain' | 'inspeksi' | 'distribusi';

export type SupplyChainStep = {
  id: SupplyChainId;
  title: string;
  body: string;
};

export type Commodity = {
  id: string;
  title: string;
  image: ImageAsset;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  bio: string;
  photo: string | null;
  featured: boolean;
};

export type Division = {
  id: string;
  title: string;
  body: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
