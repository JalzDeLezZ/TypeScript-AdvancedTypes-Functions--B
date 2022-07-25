import {addProduct} from './products/product.service';


addProduct({
  id: '1',
  title: 'Product 1',
  stock: 10,
  size: 'S',
  createAt: new Date(),
  upDateAt: new Date(),
  category: {
    id: '1',
    name: 'Category 1',
    createAt: new Date(),
    upDateAt: new Date()
  }
});