import { TCategory, TStock } from '../../interface';

export interface IProduct {
  name: string;
  category: TCategory;
  brand: string;
  description: string;
  price: number;
  productImg?: string[];
  discountPrice: number;
  quantity: number;
  inStock: TStock;
}
