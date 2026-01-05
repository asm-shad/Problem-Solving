type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const people: Person[] = [
  { name: "Jeny", age: 25, gender: "female" },
  { name: "Shad", age: 30, gender: "male" },
  { name: "Shaim", age: 28, gender: "male" }
];

const result: string[] = people
  .filter(person => person.gender !== "female")
  .map(person => person.name);

console.log(result);
