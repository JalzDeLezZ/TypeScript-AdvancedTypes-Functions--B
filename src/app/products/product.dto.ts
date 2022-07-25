import { updateProduct } from './product.service';
import { Product } from './product.model';

// type CreateProductDTO = Omit<Product, 'id' | 'createAt' | 'upDateAt' | 'category'>;

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'createAt' | 'upDateAt' | 'category'> {
  // categoryId: Category['id'];
  categoryId: string;
}

// with the Pick, we can choose which properties we want to use
type ex1Pick = Pick<Product, 'color' | 'price' | 'size'>;

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

type ex2Required = Required<Product>;

export interface FindProductDTO extends Readonly<Partial<Product>> {}

type ex3ReadOnly = Readonly<Product>;
