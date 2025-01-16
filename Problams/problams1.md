# 10 JavaScript problems

### 1. **Even or Odd Checker**

Write a function to check if a given number is even or odd.

<details>
<summary>Answer</summary>

```javascript
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`The number ${num} is even.`);
  } else {
    console.log(`The number ${num} is odd.`);
  }
}
isEvenOrOdd(81);
```

</details>

---

### 2. **Find the Largest Number**

Create a program to find the largest number in an array of numbers.

<details>
<summary>Answer</summary>

```javascript
const findLargeNumber = (arr) => {
  if (arr.length === 0) return null;
  return arr.reduce(
    (max, current) => (max >= current ? max : current),
    -Infinity
  );
};
console.log(findLargeNumber([29, 42, 15, 68])); // Output: 68
```

### Why Use -Infinity?

> -Infinity is the smallest possible value, and using it ensures that any value from the array will be larger than the initial value.
> This is a good technique for finding the largest number without needing to rely on assumptions about the range of values in the array.

```js
const findLargeNumber1 = (arr) => {
  if (arr.length === 0) return null;
  let largerNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largerNum) {
      largerNum = arr[i];
    }
  }
  return largerNum;
};
console.log(findLargeNumber1([29, 42, 15, 68]));
console.log(findLargeNumber1([]));
```

```js
const findLargeNumber1 = (arr) => {
  if (arr.length === 0) return null;
  let largerNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largerNum) {
      largerNum = arr[i];
    }
  }
  return largerNum;
};
console.log(findLargeNumber1([29, 42, 15, 68]));
console.log(findLargeNumber1([]));
```

```js
const findLargeNumber3 = (arr) => {
  return Math.max(...arr);
};
console.log(findLargeNumber3([1, 5, 7, 9]));
```

</details>

---

### 3. **Reverse a String**

Write a program that reverses a given string.

<details>
<summary>Answer</summary>

```javascript
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Naga Kumar")); // Output: "ramuK agaN"
```

```js
const reverseString1 = (str) => {
  let reverseStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};
console.log(reverseString1("java script"));
```

</details>

---

### 4. **Factorial Calculator**

Create a function to calculate the factorial of a given number.

<details>
<summary>Answer</summary>

```javascript
const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
console.log(factorial(5)); // Output: 120
```

```js
const factorialRecursion = (num) => {
  if (num === 0) return 1;

  return num * factorialRecursion(num - 1);
};
console.log(factorialRecursion(5));
```

</details>

---

### 5. **Sum of Array Elements**

Write a program to calculate the sum of all elements in an array.

<details>
<summary>Answer</summary>

```javascript
const sumOfArrEle = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfArrEle([1, 2, 3, 4, 5])); // Output: 15
```

</details>

---

### 6. **Find the Vowels**

Create a function that counts the number of vowels in a given string.

<details>
<summary>Answer</summary>

```javascript
const countVowels = (str) => {
  return str.split("").filter((char) => "aeiouAEIOU".includes(char)).length;
};
console.log(countVowels("Naga Kumar")); // Output: 4
```

```js
const findNumberOfVowels = (str) => {
  let Vowels = "aeiouAEIOU";
  let result = [];
  for (let char of str) {
    if (Vowels.includes(char)) {
      result.push(char);
    }
  }
  return result;
};
console.log(findNumberOfVowels("naga kumar"));
```

```js
const countVowels = (str) => {
  let count = 0;
  const vowels = "AEIOUaeiou";
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("naga kumar"));
```

```js
const findVowels1 = (str) => {
  let obj = {};
  const Vowels = "aeiouAEIOU";
  for (let chat of str) {
    if (Vowels.includes(chat)) {
      obj[chat] = (obj[chat] || 0) + 1;
    }
  }
  return obj;
};

console.log(findVowels1("naga kumar"));
```

</details>

---

### 7. **Check for Prime Number**

Write a function to determine if a given number is prime or not.

<details>
<summary>Answer</summary>

```javascript
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(29)); // Output: true
```

```js
const findPrimeNum = (num) => {
  let primeNum = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primeNum.push(i);
  }
  return primeNum;
};
console.log(findPrimeNum(100));
```

</details>

---

### 8. **Remove Duplicates from an Array**

Create a program to remove duplicate values from an array and return the unique elements.

<details>
<summary>Answer</summary>

```javascript
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

```js
const removeDuplicates3 = (arr) => {
  return arr.reduce((unique, value) => {
    if (!unique.includes(value)) unique.push(value);
    return unique;
  }, []);
};
console.log(removeDuplicates3([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));
```

```js
const removeDuplicates2 = (arr) => {
  let unique = [];
  for (let value of arr) {
    if (!unique.includes(value)) unique.push(value);
  }
  return unique;
};
console.log(removeDuplicates2([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));
```

```js
const removeDuplicates1 = (arr) => {
  return arr.filter((unique, index) => arr.indexOf(unique) === index);
};
console.log(removeDuplicates1([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));
```

```js
const removeDuplicates = (arr) => {
  let unique = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));
```

</details>

---

### 9. **Generate a Random Number**

Write a program to generate a random number within a specified range.

<details>
<summary>Answer</summary>

```javascript
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(generateRandomNumber(1, 100));
// Output: Random number between 1 and 100
```

</details>

---

### 10. **Sort an Array**

Implement a program that sorts an array of numbers in ascending or descending order.

<details>
<summary>Answer</summary>

```javascript
const sortArray = (arr) => arr.sort((a, b) => a - b);
console.log(sortArray([30, 39, 40, 27, 20, 1, 4, 6]));
// Output: [1, 4, 6, 20, 27, 30, 39, 40]
```

## Quick Sort (Recursive)

```js
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(right), pivot, ...quickSort(left)];
};

console.log(quickSort([30, 39, 40, 27, 20, 1, 4, 6]));
```

</details>

---
