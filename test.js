const FlattenNestedArray = (arr) => {
  return arr.reduce((single, nestedArray) => {
    return single.concat(
      Array.isArray(nestedArray) ? FlattenNestedArray(nestedArray) : nestedArray
    );
  }, []);
};
console.log(FlattenNestedArray([1, [2, [3, 4]]]));

const FlattenNestedArray1 = (arr) => {
  let flattenArray = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray.push(...FlattenNestedArray1(element));
    } else {
      flattenArray.push(element);
    }
  });
  return flattenArray;
};

console.log(FlattenNestedArray1([1, [2, [3, 4]]]));
