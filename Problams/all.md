### How do you sort an array of objects based on the age property in JavaScript?

```js
const students = [
  { id: 1, name: "Alice Johnson", age: 20, grade: "A" },
  { id: 2, name: "Bob Smith", age: 21, grade: "B" },
  { id: 3, name: "Charlie Brown", age: 19, grade: "A" },
  { id: 4, name: "Diana Evans", age: 22, grade: "C" },
  { id: 5, name: "Ethan Williams", age: 20, grade: "B" },
  { id: 6, name: "Fiona Davis", age: 21, grade: "A" },
  { id: 7, name: "George Miller", age: 23, grade: "B" },
  { id: 8, name: "Hannah Wilson", age: 19, grade: "C" },
  { id: 9, name: "Ian Thompson", age: 22, grade: "A" },
  { id: 10, name: "Julia Roberts", age: 20, grade: "B" },
];

const sortBasedOnValue = (obj) => {
  return obj.sort((a, b) => (a.age > b.age ? 1 : a.age < b.age ? -1 : 0));
};
console.log(sortBasedOnValue(students));
```
