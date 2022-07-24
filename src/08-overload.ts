
function parseStr(input : string | string[]) : string | string[] {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Jalz');
// rtaArray.reverse();
if (Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log("Send (Jalz) →",rtaArray);

const rtaString = parseStr(['J','a','l','z']);
// rtaString.toLowerCase();
if (typeof rtaString === 'string'){
  rtaString.toLowerCase();
}
console.log("Send (J,a,l,z) →",rtaString);

