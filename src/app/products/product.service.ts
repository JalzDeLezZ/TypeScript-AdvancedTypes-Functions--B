import {Product} from './product.model'

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = products.length + 1; // if the data.id isn't declared as readonly
  // data.createAt = new Date(2000,2,29); // if the data.createAt isn't declared as readonly
  products.push(data);
}