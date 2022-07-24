type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type userId = string | number;

interface ProductInterface {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
};

const products: ProductInterface[] = [];

products.push({
  id: '1',
  title: 'Product 1',
  createAt: new Date(),
  stock: 10,
  size: 'S'
});

const addProduct = (data: ProductInterface) => {
  products.push(data);
}

// type Product = {
//   id: string | number;
//   title: string;
//   createAt: Date;
//   stock: number;
//   size?: Sizes;
// };
