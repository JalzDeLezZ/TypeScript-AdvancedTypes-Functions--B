import { Product } from './product.model';
import { CreateProductDTO } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO) : Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.past(),
    upDateAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createAt: faker.date.past(),
      upDateAt: faker.date.recent(),
    },
  };
  products.push(newProduct);

  return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {
  // code
};

// delete, get

/*

export const addProduct = (data: Product) => {
  // data.id = products.length + 1; // if the data.id isn't declared as readonly
  // data.createAt = new Date(2000,2,29); // if the data.createAt isn't declared as readonly
  products.push(data);
};

*/
