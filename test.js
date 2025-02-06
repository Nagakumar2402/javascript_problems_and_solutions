const isSubsequence = (subArray, mainArray) => {
  let subIndex = 0;
  for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] === subArray[subIndex]) {
      subIndex++;
    }
    if (subArray.length === subIndex) {
      return true;
    }
  }
  return false;
};
console.log(isSubsequence([1, 3, 5], [1, 2, 3, 4, 5]));
console.log(isSubsequence([1, 4, 3], [1, 2, 3, 4, 5]));
