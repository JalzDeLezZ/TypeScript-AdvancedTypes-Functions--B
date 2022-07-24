export function parseStr (input : string) : string[];
export function parseStr (input : string[]) : string;
export function parseStr (input : number) : boolean;

/* export function parseStr(input : string | string[]) : string | string[] {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else {
    return input.split(''); //string[]
  }
} */

export function parseStr(input : unknown) : unknown {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else if (typeof input === 'string') {
    return input.split(''); //string[]
  } else if (typeof input === 'number') {
    return true //boolean
  }
}

const rtaArray = parseStr('Jalz');
rtaArray.reverse();
console.log("Send (Jalz) →",rtaArray);


const rtaString = parseStr(['J','a','l','z']);
rtaString.toLowerCase();
console.log("Send (J,a,l,z) →",rtaString);

const rtaBoolean = parseStr(123);
console.log("Send (123) →",rtaBoolean);
