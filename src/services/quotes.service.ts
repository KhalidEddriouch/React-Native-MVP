import { Quote } from '../models/ServiceRequest';

export const getQuotes = (category: string): Quote[] => {
  return [
    {
      name: `${category} Pro`,
      price: '150 MAD',
      rating: 4.5,
    },
    {
      name: `Quick ${category}`,
      price: '180 MAD',
      rating: 4.2,
    },
    {
      name: `Eco ${category}`,
      price: '130 MAD',
      rating: 4.0,
    },
  ];
};
