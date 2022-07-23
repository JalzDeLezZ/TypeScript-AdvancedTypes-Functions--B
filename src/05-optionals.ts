export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {

  return {
    id,
    stock : stock ?? 10,
    isNew : isNew ?? true, // Nullish Coalescing Operator (??)
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct('1', false, 10);
const p2 = createProduct('1', true);
const p3 = createProduct('1', );
const p4 = createProduct('1', false , 0);

console.log(p4);
// console.log(p2);
// console.log(p3);