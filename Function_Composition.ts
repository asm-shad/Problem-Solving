const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const composedFunction = (num: number): number => {
  return addFive(double(square(num)));
};

console.log(composedFunction(3));
