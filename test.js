/* Write a JavaScript Program to replace every character in a given string with the character following it in the alphabet. */

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
