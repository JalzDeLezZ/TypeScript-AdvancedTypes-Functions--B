const aNumbers1: number[] = [1, 2, 3, 4, 5];

aNumbers1.push(6);
aNumbers1.pop();
aNumbers1.unshift(2);


const aNumbers2: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// aNumbers2.push(6);
// aNumbers2.pop();
// aNumbers2.unshift(2);
aNumbers2.filter(e => e > 2);
aNumbers2.reduce((acc, curr) => acc + curr);
aNumbers2.map(e => e * 2);
