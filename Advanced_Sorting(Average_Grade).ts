type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
  { name: "Jeny", grades: [80, 90, 85] },
  { name: "Shad", grades: [70, 75, 72] },
  { name: "Shaim", grades: [90, 95, 92] }
];

students.sort((a, b) => {
  const avgA =
    a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
  const avgB =
    b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;

  return avgB - avgA;
});

console.log(students);
