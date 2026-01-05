const numbers: number[] = [1, 2, 3, 4, 6, 9];

const sumOfEvenNumbers: number = numbers.reduce(
  (sum: number, num: number) => {
    return num % 2 === 0 ? sum + num : sum;
  },
  0
);

console.log(sumOfEvenNumbers);
