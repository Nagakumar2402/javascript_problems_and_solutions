/* 1. write a JavaScript program to create a new string from  a given string taking the first 3 characters and last 3 characters of the string. The string length must be 3 or more, if not the original string will be returned. */

const makeNewString = (str) => {
  return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
};

console.log(makeNewString("JavaScript"));

/* 2. write sa javascript program to extract the first half of a string of even length */

const firstHalf = (str) => {
  return str.slice(0, str.length / 2);
};

console.log(firstHalf("nagakumar"));

/* 3. write a javascript program to concatenate two strings except their first character */

const concatString = (str1, str2) => {
  return str1.slice(1) + str2.slice(1);
};

console.log(concatString("JavaScript", "Java"));

/* 4. Given two values, write a javascript program to find out which one is nearest to 100 */

const findNearest = (num1, num2) => {
  return Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;
};

console.log(findNearest(200, 50));

const findNearest1 = (num1, num2) => {
  return 100 - num1 < 100 - num2 ? num1 : num2;
};
console.log(findNearest(100, 50));

// write a javascript program to check a given
