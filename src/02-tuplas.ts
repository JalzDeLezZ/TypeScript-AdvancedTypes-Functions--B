const prices : (number | string)[] = [1,2,3,4,5, 'asd']

prices.push(6);
prices.push('asd');

// const user = ['jalz', 14];
let user : [string, number] = ['jalz', 14];


user = ['hello', 2];
// user = ['hello', 2,true]; // Error

//destructuring
const [userName, age] = user;
console.log("Hey! you",userName, age);

// npx ts-node src/02-tuplas.ts