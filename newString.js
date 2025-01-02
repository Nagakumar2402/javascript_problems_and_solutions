/* write a javascript program to create a new string adding "new!" in front of a given string. If the string already begins with "new!" then return the original string. */

function newString(str) {
  if (str.startsWith("new!")) {
    /*The startsWith() method in JavaScript checks if a string begins with the characters of a specified string, returning true or false accordingly.*/
    return str;
  } else {
    return "new!" + str;
  }
}

console.log(newString("new! hello"));

const addNew = (str) => {
  //indexOf() returns the position of the first occurrence of a value in a string.
  return str.indexOf("new!") === 0 ? str : "new!" + str;
};
console.log(addNew("new! hello"));

const addNew1 = (str) => {
  return str.startsWith("new!") ? str : "new!" + str;
};
console.log(addNew1("nee hello"));
