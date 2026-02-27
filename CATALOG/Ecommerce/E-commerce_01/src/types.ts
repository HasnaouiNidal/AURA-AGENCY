export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  image: string;
  thumbnails: string[];
  specs: {
    label: string;
    value: string;
  }[];
  colors: string[];
  straps: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedStrap: string;
}

export type ViewState = 'home' | 'pdp' | 'checkout';
