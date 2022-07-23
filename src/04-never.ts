const withoutEnd = () => {
  while (true) {
    console.log('never stop learning');
  }
};

const fail = (mssge: string) => {
  throw new Error("Error: " + mssge);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return "input.toUpperCase();"
  // } else if (typeof input === 'number') {
  //   return "input * 2;"
  } else if (Array.isArray(input)) {
    return 'this is an array';
  }
  return fail('not match');
};

console.log(example('hello'));
console.log(example([1, 2, 3]));
console.log(example(1));
console.log(example('This is after to fail'));
