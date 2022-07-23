let anyVar: any;
anyVar = 1;
anyVar = 'asd';
anyVar = true;
anyVar = [];
anyVar = {};
anyVar = () => {};
anyVar = null;
anyVar = undefined;

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

// ↑↑↑ dangerous ↑↑↑

let unknowVar: unknown;

unknowVar = 1;
unknowVar = 'asd';
unknowVar = true;
unknowVar = [];
unknowVar = {};
unknowVar = () => {};
unknowVar = null;
unknowVar = undefined;

// unknowVar.toUpperCase(); // Error he needs to be validate
// unknowVar.doSomething(); // Error he needs to be validate

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
