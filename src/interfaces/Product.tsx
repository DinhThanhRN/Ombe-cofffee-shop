interface Product {
  category: string;
  ingredients: Array<string>;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  name: string;
  numberOfVote: number;
  point: number;
  price: number;
  rating: number;
  reviews: Array<string>;
  variant: string;
}

interface ProductData {
  id: string;
  data: Product;
}

export type {Product, ProductData};
