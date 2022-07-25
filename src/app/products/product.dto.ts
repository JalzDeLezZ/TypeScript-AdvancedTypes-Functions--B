
// type CreateProductDTO = Omit<Product, 'id' | 'createAt' | 'upDateAt' | 'category'>;

import { Product } from "./product.model";

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createAt' | 'upDateAt' | 'category'> {
  // categoryId: Category['id'];
  categoryId: string;
}

// with the Pick, we can choose which properties we want to use
type example = Pick<Product, 'color' | 'price' | 'size'>;