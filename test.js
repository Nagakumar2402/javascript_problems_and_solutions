const sumOfAddEvenNum = (num) => {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return { oddSum, evenSum };
};
console.log(sumOfAddEvenNum(5));

const capitalizes1stLtr = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(capitalizes1stLtr("hello world"));

const Permutations = (str1, str2) => {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2 ? true : false;
};
console.log(Permutations("abc", "cba"));

const calculateVal = (arr) => {
  let sum = 1;
  for (let num of arr) {
    if (num === 0) {
      continue;
    } else {
      sum *= num;
    }
  }
  return sum;
};
console.log(calculateVal([1, 2, 0, 4]));

const UniqueValues = (arr) => {
  return arr.filter((unique, index) => arr.indexOf(unique) === index);
};
console.log(UniqueValues([1, 2, 2, 3, 4, 4]));
