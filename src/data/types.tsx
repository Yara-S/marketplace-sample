import type { StaticImageData } from 'next/image';

export type ProductType = {
  slug: string;
  shoeName: string;
  shoeCategory: string;
  coverImage: StaticImageData | string;
  currentPrice: number;
  previousPrice: number;
  rating: number;
  pieces_available: number;
  justIn: boolean;
  count?: number;
  shots: StaticImageData[];
  overview: string;
};
