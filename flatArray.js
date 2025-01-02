// const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// const flatArray = nestedArray.flat(Infinity);
// console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8]

const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const nestedFatedArray = (arr) => {
  return arr.reduce(
    (previousValue, currentValue) =>
      previousValue.concat(
        Array.isArray(currentValue)
          ? nestedFatedArray(currentValue)
          : currentValue
      ),
    []
  );
};

console.log(nestedFatedArray(nestedArray));
