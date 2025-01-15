const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;
  let totalArray = arr.reduce((ini, cur) => ini + cur, 0);
  return totalSum - totalArray;
};
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9]));

const findMissingNumber1 = (arr) => {
  let n = arr.length + 1;
  let XORall = -Infinity;
  let XORarray = -Infinity;

  for (let i = 1; i <= n; i++) {
    XORall ^= i;
  }
  for (let num of arr) {
    XORarray ^= num;
  }
  return XORall ^ XORarray;
};
console.log(findMissingNumber1([1, 2, 3, 4, 5, 6, 8, 9]));
