Here is the formatted version of your **10 additional unique JavaScript problem ideas** for beginners:

---

### 1. **Convert Decimal to Binary**

- Write a function that converts a decimal number to its binary equivalent.  
  Example: `10` → `"1010"`.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const decimalToBinary = (decimal) => {
  return decimal.toString(2);
};

console.log(decimalToBinary(20)); // Output: "10100"
```

</details>

---

### 2. **Find the Sum of Multiples**

- Create a program to find the sum of all multiples of 3 or 5 below a given number.  
  Example: Below `10` → `3 + 5 + 6 + 9 = 23`.

<details>
<summary><strong>Solution</strong></summary>

**Using Loop**:

```javascript
const sumOfMultiples = (limit) => {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfMultiples(20)); // Output: 78
```

**Using Functional Programming**:

```javascript
const sumOfMultiples1 = (limit) => {
  return Array.from({ length: limit }, (_, i) => i)
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, current) => sum + current, 0);
};

console.log(sumOfMultiples1(10)); // Output: 23
```

</details>

---

### 3. **Find the Smallest Missing Positive Number**

- Given an array of positive integers, find the smallest missing positive number.  
  Example: `[1, 2, 4]` → `3`.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const smallestMissingNum = (arr) => {
  const sortedArr = arr.filter((num) => num > 0).sort((a, b) => a - b);
  let smallestMissing = 1;
  for (let num of sortedArr) {
    if (num === smallestMissing) {
      smallestMissing++;
    } else if (num > smallestMissing) {
      break;
    }
  }
  return smallestMissing;
};

console.log(smallestMissingNum([1, 2, 4])); // Output: 3
```

</details>

---

### 4. **Rotate an Array**

- Write a program to rotate an array to the right by a given number of steps.  
  Example: `[1, 2, 3, 4]` rotated 2 steps → `[3, 4, 1, 2]`.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const rotateArray = (arr, steps) => {
  let n = arr.length;
  steps = steps % n;
  const lastPart = arr.slice(-steps);
  const firstPart = arr.slice(0, n - steps);
  return lastPart.concat(firstPart);
};

console.log(rotateArray([1, 2, 3, 4], 2)); // Output: [3, 4, 1, 2]
```

</details>

---

### 5. **Check if a Year is a Leap Year**

- Build a function to determine if a given year is a leap year.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const leapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(leapYear(2024)); // Output: true
console.log(leapYear(2025)); // Output: false
```

</details>

---

### 6. **Count Occurrences of a Word in a String**

- Write a program to count how many times a specific word appears in a given string.

<details>
<summary><strong>Solution</strong></summary>

**Using Loop**:

```javascript
const countWordOccurrences = (text, word) => {
  text = text.toLowerCase();
  word = word.toLowerCase();
  const words = text.split(/\s+/);
  let count = 0;
  for (let w of words) {
    if (w === word) {
      count++;
    }
  }
  return count;
};

console.log(countWordOccurrences("naga is a naga boy", "naga")); // Output: 2
```

**Using `filter`**:

```javascript
const countWord = (str, word) => {
  return str.split(" ").filter((curWord) => curWord === word).length;
};

console.log(countWord("naga is a naga boy", "naga")); // Output: 2
```

</details>

---

### 7. **Find the Median of an Array**

- Create a function to calculate the median of an array of numbers.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);
  return arr.length % 2 === 0
    ? (arr[middle - 1] + arr[middle]) / 2
    : arr[middle];
};

console.log(findMedian([1, 2, 3, 4, 5])); // Output: 3
console.log(findMedian([1, 2, 3, 4, 5, 6])); // Output: 3.5
```

</details>

---

### 8. **Remove All Spaces from a String**

- Build a function that removes all spaces from a given string.  
  Example: `"Hello World"` → `"HelloWorld"`.

<details>
<summary><strong>Solution</strong></summary>

**Using `split` and `join`**:

```javascript
const removeAllSpaces = (str) => {
  return str.split(" ").join("");
};

console.log(removeAllSpaces("Hello World")); // Output: "HelloWorld"
```

**Using `replace`**:

```javascript
const removeAllSpaces1 = (str) => {
  return str.replace(/\s+/g, "");
};

console.log(removeAllSpaces1("Hello World")); // Output: "HelloWorld"
```

</details>

---

### 9. **Find the First Non-Repeating Character**

- Write a program to find the first character in a string that does not repeat.  
  Example: `"swiss"` → `"w"`.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const nonRepeatingFirstChar = (str) => {
  const charCount = {};
  for (let c of str) {
    charCount[c] = (charCount[c] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
};

console.log(nonRepeatingFirstChar("swiss")); // Output: "w"
```

</details>

---

### 10. **Sum of Numbers in a Range**

- Create a function to calculate the sum of all integers between two numbers, inclusive.  
  Example: Sum between `1` and `5` → `1 + 2 + 3 + 4 + 5 = 15`.

<details>
<summary><strong>Solution</strong></summary>

**Using Loop**:

```javascript
const sumOfRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumOfRange(1, 5)); // Output: 15
```

**Using Formula**:

```javascript
const sumOfRangeFormula = (start, end) => {
  let n = end - start + 1;
  return (n * (end + start)) / 2;
};

console.log(sumOfRangeFormula(1, 5)); // Output: 15
```

</details>

---
