import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  size?: Sizes;
  category: Category;
}
