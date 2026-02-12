export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Restaurant {
  id: number;
  name: string;
  category: string;
  rating: number;
  priceRange: string;
  isOpen: boolean;
  image: string;
  description: string;
  reviews?: Review[];
}
