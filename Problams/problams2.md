# JavaScript problems

### 1. **Capitalize the First Letter of Each Word**

Write a function that takes a sentence and capitalizes the first letter of each word.

<details>
<summary>Answer</summary>

```js
const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
const sentence = "capitalize the first letter of each word";
console.log(capitalizeFirstLetter(sentence));
```

</details>

---

### 2. **Check for Anagram**

Create a program to check if two given strings are anagrams of each other (contain the same characters in a different order).

<details>
<summary>Answer</summary>

```js
const checkAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  let sortedStr1 = string1.split("").sort().join("");
  let sortedStr2 = string2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};
console.log(checkAnagram("silent", "listen")); // true
console.log(checkAnagram("hello", "world")); // false
```

</details>

---

### 3. **Fibonacci Sequence Generator**

Write a program to generate the first `n` numbers in the Fibonacci sequence.

<details>
<summary>Answer</summary>

### formula for fibonacci F(n) = F(n-1) + F(n-2) for n ≥ 2

```js
const fibonacciGenerator = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};
console.log(fibonacciGenerator(10));
```

## using recursion

```js
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
```

</details>

---

### 4. **Count the Frequency of Characters**

Build a function that counts the frequency of each character in a string.

<details>
<summary>Answer</summary>
 
## using reduce
```js
const countCharFrequency = (str) => {
  return str.split("").reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
};
console.log(countCharFrequency("hello world"));
```
## using For Of
```js
const countTheFrequencyOfChar = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
};
console.log(countTheFrequencyOfChar("naga kumar"));

````

</details>

---

### 5. **Check if Array is Sorted**

Write a function to determine if an array is sorted in ascending or descending order.

<details>
<summary>Answer</summary>

```js
const checkArraySorted = (arr) => {
  let isAscending = true;
  let isDescending = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) isAscending = false;
    if (arr[i] > arr[i - 1]) isDescending = false;
  }
  if (isAscending) return "Array is sorted in ascending order.";
  if (isDescending) return "Array is sorted in descending order.";
  return "Array is not sorted.";
};
console.log(checkArraySorted([1, 2, 3])); // Ascending
console.log(checkArraySorted([3, 2, 1])); // Descending
console.log(checkArraySorted([1, 3, 2])); // Not sorted
````

</details>

---

### 6. **Find the Second Largest Number**

Create a program to find the second largest number in an array of numbers.

<details>
<summary>Answer</summary>

```js
const secondLargest = (arr) => {
  if (arr.length < 2) return "Array must have at least two elements.";
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest === -Infinity
    ? "No second largest number found."
    : secondLargest;
};
console.log(secondLargest([10, 20, 30])); // 20
console.log(secondLargest([5])); // Error message
```

</details>

---

### 7. **Check for Palindromic Number**

Write a program to check if a number reads the same forward and backward.

<details>
<summary>Answer</summary>

```js
const isPalindromicNumber = (num) => {
  let str = num.toString();
  return str === str.split("").reverse().join("");
};
console.log(isPalindromicNumber(121)); // true
console.log(isPalindromicNumber(123)); // false
```

</details>

---

### 8. **Sum of Digits**

Create a function to calculate the sum of the digits of a given number.

<details>
<summary>Answer</summary>

```js
const sumOfDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
};
console.log(sumOfDigits(123)); // 6
```

</details>

---

### 9. **Longest Word in a Sentence**

Write a program to find and return the longest word in a given sentence.

<details>
<summary>Answer</summary>

```js
const longestWord = (str) => {
  return str.split(" ").reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
};
console.log(longestWord("find the longest word in this sentence")); // "longest"
```

```js
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
```

## using Sort Method

```js
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

</details>

---

### 10. **Remove Specific Element from Array**

Build a function that removes all occurrences of a specific element from an array.

<details>
<summary>Answer</summary>

```js
const removeElement = (arr, elementToRemove) => {
  return arr.filter((value) => value !== elementToRemove);
};
console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
```

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
```

```js
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

</details>

---
