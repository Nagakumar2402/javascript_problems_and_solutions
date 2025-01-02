//1. given a year, report if it is a leap year.

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

console.log(isLeapYear(2004));

/*2. write a javascript program to compare two objects to determine ig the first one contains the same properties as the second one. (which may also have additional properties) */

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, d: 4 };

const compareObjects = (obj1, obj2) => {
  return Object.keys(obj1).every((key) => obj2[key]);
};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj2, obj3));

/*3. write a Javascript program to generate a random hexadecimal color code. */

const getRandomHexNumber = () => {
  return Math.floor(Math.random() * 16).toString(16);
};

const getRandomHexColor = () => {
  return `#${Array.from({ length: 6 }).map(getRandomHexNumber).join("")}`;
  return;
};
console.log(getRandomHexColor());

/* 4. Write a JavaScript Program to replace every character in a given string with the character following it in the alphabet. */

const replaceChar = (str) => {
  /* 
 1. The fromCharCode() method in JavaScript is a static method of the String object. Which is used to create a string from a sequence of Unicode values.
  2. The charCodeAt() method returns the Unicode value of the character at a specified index in a string.
*/

  return str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

console.log(replaceChar("abcd"));
