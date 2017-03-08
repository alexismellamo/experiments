
const greetCurried = (greeting) => 
  (separator) => 
  (exclamation) => 
  (name) => console.log(`${greeting}${separator} ${name}${exclamation}`);

const greetHello = greetCurried('Hello')('...')('!');

const deleteUndefined = (x) => x;
const filter = (filterFunction) => (array) => array.filter(filterFunction);

const deleteUndefinedArray = filter(deleteUndefined);

console.log(deleteUndefinedArray([undefined, 2, 3, 4, null, 5]));
console.log(deleteUndefinedArray([undefined, '2', 3, 4, null, 5]));
console.log(deleteUndefinedArray([undefined, 2, '23', 4, null, 5]));
