type PersonInfo = {
  name: string;
  age: number;
};

const peopleList: PersonInfo[] = [
  { name: "Sam", age: 20 },
  { name: "Tom", age: 25 }
];

function updatePersonAge(
  list: PersonInfo[],
  name: string,
  newAge: number
): PersonInfo[] {
  return list.map(person =>
    person.name === name ? { ...person, age: newAge } : person
  );
}

const updatedList = updatePersonAge(peopleList, "Sam", 22);
console.log(updatedList);
