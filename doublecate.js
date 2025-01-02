const arr = [1, 2, 3, 4, 5, 6, 7, 3, 8, 1, 8, 8, 8, 8, 8, 8];

const uniqueNum = [...new Set(arr)];
// console.log("uniqueNum", uniqueNum);

const uniqueNum1 = arr.filter((num, index) => arr.indexOf(num) === index);
console.log("uniqueNum1", uniqueNum1);

const uniqueNum2 = arr.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
// console.log("uniqueNum2", uniqueNum2);

const uniqueValue = [];

arr.forEach((uniqueNum) => {
  if (!uniqueValue.includes(uniqueNum)) {
    uniqueValue.push(uniqueNum);
  }
});
console.log(uniqueValue);

const uniqueNum3 = [...arr.map((value) => value)].filter(
  (value, index) => arr.indexOf(value) === index
);

console.log("uniqueNum3:", uniqueNum3);
