import { addProduct, products } from './products/product.service';
import { faker, FakerError } from '@faker-js/faker';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    title: faker.commerce.productName(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
    createAt: faker.date.past(),
    upDateAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createAt: faker.date.past(),
      upDateAt: faker.date.recent(),
    },
  });
}

console.log(products);
