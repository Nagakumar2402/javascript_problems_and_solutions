// let color = "#";

// const randomColor = () => {
//   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };
// randomColor();

// document.body.style.backgroundColor = color;

const randomColor = () => {
  const hexChars = "0123456789ABCDEF";
  return (
    "#" +
    Array.from(
      { length: 6 },
      () => hexChars[Math.floor(Math.random() * 16)]
    ).join("")
  );
};

const color = randomColor();
// document.body.style.backgroundColor = color;

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 300, "Second"));

Promise.race([promise1, promise2]).then((result) => {
  console.log(result); // "Second"
});
