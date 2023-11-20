// Write your functions here, make sure to export them
const double1 = (first) => first * 2;

const double2 = (first, second) => first * 2;

const double3 = (first, second) => {
  if (first > second) {
    return first * 2;}
  else {
    return second * 2;}
}

const repeat = (first, second) => {
  let result = "";
  if (second < 0) {
    return result;
  }
  else{
  for (let i = 0; i < second; i++) {
    result += first;

    }
  }
  return result;
}
const batman = () =>  repeat("na", 10) + " batman!";

const max = (first, second) => Math.max(first, second);

module.exports = { double1 ,double2,double3, repeat, batman , max};
