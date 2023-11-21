const double1 = (first) => first * 2;
const double2 = (first, second) => first * 2;
const double3 = (first, second) => (first > second ? first : second) * 2;
const repeat = (first, second) =>  Number.isInteger(second) && second > 0 ? first.repeat(second) : '';
const batman = () => repeat('na', 10) + ' batman!';
const max = (first, second) => Math.max(first, second);
const maxDivide = (first, second) =>  Math.min(first, second) / Math.max(first, second);
const maxStr = (first, second) =>  first.length >= second.length ? first : second;
const even = (first) => first % 2 === 0;
const evenBelow = (first) =>  Array.from({ length: Math.floor(first / 2) }, (x) =>  (x, i) => 2 * i);
const evenIn = (...array) => array.filter((number) => number % 2 === 0);
const multiplyArray = (...array) => array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
const divideArray = array => Array.isArray(array) && array.slice(1).includes(0) ? "Cannot divide by zero" : array.reduce((acc, val) => acc / val);

module.exports = {  double1,  double2,  double3,  repeat,  batman,  max,  maxDivide,  maxStr,  even, evenBelow,  evenIn,  multiplyArray,  divideArray,};
