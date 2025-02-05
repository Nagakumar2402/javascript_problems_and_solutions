

---

### 10 JavaScript Problem Ideas for Beginners

#### 1. Replace All Vowels in a String

Write a program to replace all vowels in a string with a specified character (e.g., `"hello"` → `"h*ll*"` if `*` is the replacement).

<details>
<summary><strong>Solution</strong></summary>

```js
function allVowels(str) {
  const vowels = "aeiouAEIOU";
  let newWord = "";
  for (let char of str) {
    if (vowels.includes(char)) {
      newWord += "*";
    } else {
      newWord += char;
    }
  }
  return newWord;
}
console.log(allVowels("hello"));
```

```js
const allVowelsReplace = (str) => {
  let vowels = "aeiouAEIOU";
  return str
    .split("")
    .map((char) => (vowels.includes(char) ? "*" : char))
    .join("");
};
console.log(allVowelsReplace("naga"));
```

```js
const allVowelsReplace1 = (str) => {
  return str.replace(/[aeiouAEIOU]/g, "*");
};
console.log(allVowelsReplace1("kumar"));
```

</details>

---

#### 2. Sort Words Alphabetically

Create a program to sort the words in a given sentence alphabetically.

<details>
<summary><strong>Solution</strong></summary>

```js
const alphabeticallySort = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .sort((a, b) => a.localeCompare(b))
    .join(" ");
};
console.log(alphabeticallySort("The quick brown fox jumps over the lazy dog"));
```

</details>

---

#### 3. Sum of Squares

Write a function to calculate the sum of squares of all numbers in an array (e.g., `[1, 2, 3]` → `1² + 2² + 3² = 14`).

<details>
<summary><strong>Solution</strong></summary>

```js
const sumOfSquares = (arr) => {
  return arr.reduce((sum, num) => sum + num ** 2, 0);
};
console.log(sumOfSquares([1, 2, 3]));
```

</details>

---

#### 4. Find the Longest Substring Without Repeating Characters

Create a program to find the length of the longest substring without repeating characters (e.g., `"abcabcbb"` → `3` for `"abc"`).

<details>
<summary><strong>Solution</strong></summary>

```js
const longestSubstrWithoutRepeat = (str) => {
  let longest = "";
  let current = "";
  for (let char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest.length;
};
console.log(longestSubstrWithoutRepeat("abcabcbb")); // Output: 3
```

</details>

---

#### 5. Find Common Divisors

Write a program to find all common divisors of two numbers (e.g., `12` and `18` → `[1, 2, 3, 6]`).

<details>
<summary><strong>Solution</strong></summary>

```js
const commonDivisorsOfTwoNumbers = (num1, num2) => {
  let divisors = [];
  let limit = Math.min(num1, num2);
  for (let i = 1; i <= limit; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};
console.log(commonDivisorsOfTwoNumbers(12, 18));
```

</details>

---

#### 6. Check if a String is a Pangram

Build a function to check if a given string contains every letter of the alphabet at least once (e.g., `"The quick brown fox jumps over the lazy dog"` → `true`).

<details>
<summary><strong>Solution</strong></summary>

```js
const containsTheAlphabet = (str) => {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let formattedStr = str.toLowerCase().replace(/\s/g, "");
  return [...alphabets].every((char) => formattedStr.includes(char));
};
console.log(containsTheAlphabet("The quick brown fox jumps over the lazy dog")); // true
console.log(containsTheAlphabet("nagakumar")); // false
```

</details>

---

#### 7. **Generate Multiplication Table**

- Create a program to generate a multiplication table for a given number.

<details>
<summary><strong>Solution</strong></summary>

```javascript
const multiplicationTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

multiplicationTable(10);
```

## </details>

#### 8. Find the Mode of an Array

Write a function to find the mode (most frequently occurring value) in an array.

<details>
<summary><strong>Solution</strong></summary>

```js
const mostFrequentlyOccurringValue = (arr) => {
  let frequency = {};
  let maxFrequency = 0;
  let mode = null;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      mode = num;
    }
  }
  return mode;
};
console.log(mostFrequentlyOccurringValue([1, 2, 3, 4, 4, 4, 3, 2, 1]));
```

</details>

---

#### 9. Check if Two Strings are Rotations

Build a function to check if one string is a rotation of another (e.g., `"abcde"` and `"deabc"` → `true`).

<details>
<summary><strong>Solution</strong></summary>

```js
const checkToString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  return (str1 + str1).includes(str2);
};
console.log(checkToString("abcde", "deabc")); // true
```

</details>

---

#### 10. Check if a Number is a Perfect Square

Write a program to check if a given number is a perfect square (e.g., `16` → `true`, `18` → `false`).

<details>
<summary> <strong>Solution<strong> </summary>

```js
const perfectSquare = (num) => {
  let value = Math.sqrt(num);
  return Number.isInteger(value);
};
console.log(perfectSquare(16)); // true
console.log(perfectSquare(18)); // false
```

</details>

---
