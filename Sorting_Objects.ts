type Car = {
  make: string;
  model: string;
  year: number;
};

const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "BMW", model: "X5", year: 2010 },
  { make: "Tesla", model: "Model 3", year: 2022 }
];

cars.sort((a, b) => a.year - b.year);

console.log(cars);
