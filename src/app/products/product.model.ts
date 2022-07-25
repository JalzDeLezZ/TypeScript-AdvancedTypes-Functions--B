import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
  category: Category;
};
