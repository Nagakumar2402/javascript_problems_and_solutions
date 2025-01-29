const specificValue = (arr, specific) => {
  return arr.some((char) => char === specific);
};
console.log(specificValue([1, 2, 3, 4, 5, 6], 6));
