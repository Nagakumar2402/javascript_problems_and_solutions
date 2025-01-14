const commonElementsBetweenTwo = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  let arrElement = [];
  for (let i = 0; i < newArr.length; i++) {
    if (arrElement.includes(newArr[i])) {
      arrElement.push(newArr[i]);
    }
  }
  return arrElement;
};
console.log(commonElementsBetweenTwo([1, 2], [2, 5]));
