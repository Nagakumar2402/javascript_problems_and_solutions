Here are **10 more unique JavaScript problem ideas** for beginners:

1. **Capitalize the First Letter of Each Word**

   - Write a function that takes a sentence and capitalizes the first letter of each word.

```js
const capitalizeThe1stLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
const sting = "sentence and capitalizes the first letter of each word";
console.log(capitalizeThe1stLetter(sting));
/*
charAt() returns the character at a specified index (position) in a string.
Array.slice() returns selected array elements as a new array:
*/
```

2. **Check for Anagram**

   - Create a program to check if two given strings are anagrams of each other (contain the same characters in a different order).

```js
const checkAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  let sortedStr1 = string1.split("").sort().join("");
  let sortedStr2 = string2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
console.log(checkAnagram("silent", "listen"));
console.log(checkAnagram("note", "tone"));
console.log(checkAnagram("stressed", "desserts"));
console.log(checkAnagram("hello", "world"));
```

3. **Fibonacci Sequence Generator**

   - Write a program to generate the first `n` numbers in the Fibonacci sequence.

```js
// formula for fibonacci F(n) = F(n-1) + F(n-2) for n ≥ 2

const fibonacciSequence = (num) => {
  if (num === 0) return 1;

  return num * fibonacciSequence(num - 1);
};
// console.log(fibonacciSequence(5));

const fibonacciSequenceNum = (num, arr = [0, 1]) => {
  if (num <= 2) return arr;
  const [nextToLast, last] = arr.slice(-2);
  return fibonacciSequenceNum(num - 1, [...arr, nextToLast + last]);
};

// console.log(fibonacciSequenceNum(12));

const fibonacciGenerator = (num) => {
  if (num <= 0) return [];
  if (num === 1) return [0];
  let fibonacciArr = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
  }
  return fibonacciArr;
};

console.log(fibonacciGenerator(10));
```

4. **Count the Frequency of Characters**

   - Build a function that counts the frequency of each character in a string.

```js
const countTheFrequencyOfChar = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};
console.log(countTheFrequencyOfChar("naga kumar"));

const countTheFrequencyOfChar2 = (str) => {
  return str.split("").reduce((freq, char) => {
    // freq[char] = (freq[char] || 0) + 1;
    freq[char] ? (freq[char] = +1) : (freq[char] = 1);
    return freq;
  }, {});
};

console.log(countTheFrequencyOfChar2("nagakumar"));
```

5. **Check if Array is Sorted**

   - Write a function to determine if an array is sorted in ascending or descending order.

```js
const checkIfArrayIsSorted = (arr) => {
  let isAscending = true;
  let isDescending = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      isAscending = false;
    }
    if (arr[i] > arr[i - 1]) {
      isDescending = false;
    }
  }
  if (isAscending) return "Array is sorted in ascending order.";
  if (isDescending) return "Array is sorted in descending  order.";

  return "Array is not sorted ";
};
console.log(checkIfArrayIsSorted([1, 3, 6, 8, 9, 12, 34, 56]));
console.log(checkIfArrayIsSorted([5, 4, 3, 2, 1]));
console.log(checkIfArrayIsSorted([5, 4, 3, 2, 1, 10, 3028]));
```

6. **Find the Second Largest Number**

   - Create a program to find the second largest number in an array of numbers.

```js
const secondLargestNum = (arr) => {
  if (arr.length < 2) return "array must contain at least two elements  ";
  let largest = -Infinity;
  let secondLargestNum = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargestNum = largest;
      largest = num;
    } else if (num > secondLargestNum && num !== largest) {
      secondLargestNum = num;
    }
  }
  return secondLargestNum === -Infinity
    ? "second largest number not found"
    : secondLargestNum;
};

console.log(secondLargestNum([2, 4, 8]));
console.log(secondLargestNum([2]));
console.log(secondLargestNum([2, 2, 2]));
```

7. **Check for Palindromic Number**

   - Write a program to check if a given number reads the same forward and backward (e.g., 121, 1221).

```js
const PalindromicNum = (num) => {
  let srt = num.toString();
  return srt === srt.split("").reverse().join("");
};

console.log(PalindromicNum(121));
console.log(PalindromicNum(1221));
```

8. **Sum of Digits**

   - Create a function to calculate the sum of the digits of a given number (e.g., for 123, return 1+2+3=6).

```js
const SumOfDigits = (num) => {
  const str = num.toString();
  return str.split("").reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
};
console.log(SumOfDigits(123));

const SumOfDigits1 = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
    console.log(sum);
  }
  return sum;
};
console.log(SumOfDigits1(121));
```

9. **Longest Word in a Sentence**

   - Write a program to find and return the longest word in a given sentence.

```js
const longestWordInASentence = (str) => {
  return str.split(" ").reduce((largest, word) => {
    return word.length > largest.length ? word : largest;
  }, "");
};
console.log(
  longestWordInASentence("find and return the longest word in a given sentence")
);

const longestWordInASentence1 = (str) => {
  let largest = "";
  let words = str.split(" ");
  for (let word of words) {
    if (word.length > largest.length) {
      largest = word;
    }
  }
  return largest;
};
console.log(
  longestWordInASentence1(
    "find and return the longest word in a given sentence"
  )
);

const longestWordInASentence2 = (str) => {
  let words = str.split(" ");
  return words.sort((a, b) => b.length - a.length)[0];
};

console.log(
  longestWordInASentence2(
    "find and return the longest word in a given sentence"
  )
);
```

10. **Remove Specific Element from Array**

- Build a function that removes all occurrences of a specific element from an array (e.g., remove all `3`s from `[1, 3, 2, 3, 4]` to return `[1, 2, 4]`).

```js
const removeSpecificElement = (arr) => {
  const sp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      continue;
    } else {
      sp.push(arr[i]);
    }
  }
  return sp;
};
console.log(removeSpecificElement([1, 3, 2, 3, 4]));

const removeSpecificElement1 = (arr, removeElement) => {
  return arr.filter((value) => removeElement !== value);
};
console.log(removeSpecificElement1([1, 3, 2, 3, 4], 3));

const removeSpecificElement2 = (arr, removeElement) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== removeElement) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(removeSpecificElement2([1, 3, 2, 3, 4], 3));
```

These problems will help you strengthen your grasp on various JavaScript concepts like loops, conditionals, string manipulation, and array operations!
