let string = "madam";

const revStr = string.split("").reverse().join("");

if (string === revStr) {
  console.log("isPalindrome ");
} else {
  console.log("this is not a Palindrome");
}

let string1 = "dad";
let revStr1 = "";

for (let i = string1.length - 1; i >= 0; i--) {
  revStr1 += string1[i];
}
if (string1 === revStr1) {
  console.log("isPalindrome ");
} else {
  console.log("this is not a Palindrome");
}
