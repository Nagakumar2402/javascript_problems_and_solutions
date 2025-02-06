#### 1. Find the Sum of Odd and Even Numbers Separately

Write a program that takes an array of numbers and returns the sum of odd and even numbers separately.  
Example: `[1, 2, 3, 4, 5] → oddSum: 9, evenSum: 6`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const sumOfOddEvenNum = (num) => {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return { oddSum, evenSum };
};
console.log(sumOfOddEvenNum(5));
```

</details>

---

#### 2. Convert a String to Title Case

Create a function that capitalizes the first letter of every word in a string.  
Example: `"hello world" → "Hello World"`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(capitalizeFirstLetter("hello world"));
```

</details>

---

#### 3. Check if Two Strings are Permutations of Each Other

Write a function to check if two strings are permutations of each other.  
Example: `"abc"` and `"cab" → true`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const arePermutations = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
};
console.log(arePermutations("abc", "cba"));
```

</details>

---

#### 4. Calculate the Product of an Array (Ignoring Zero)

Build a function that calculates the product of all non-zero elements in an array.  
Example: `[1, 2, 0, 4] → 8`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const calculateProduct = (arr) => {
  let product = 1;
  for (let num of arr) {
    if (num !== 0) {
      product *= num;
    }
  }
  return product;
};
console.log(calculateProduct([1, 2, 0, 4]));
```

</details>

---

#### 5. Count Unique Values in an Array

Write a program to count the number of unique values in an array.  
Example: `[1, 2, 2, 3, 4, 4] → 4`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const countUniqueValues = (arr) => {
  return arr.filter((unique, index) => arr.indexOf(unique) === index).length;
};
console.log(countUniqueValues([1, 2, 2, 3, 4, 4]));
```

</details>

---

#### 6. Find All Substrings of a String

Create a function to generate all substrings of a given string.  
Example: `"abc" → ["a", "ab", "abc", "b", "bc", "c"]`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const findAllSubstrings = (str) => {
  let substrings = [];
  for (let start = 0; start < str.length; start++) {
    for (let end = start + 1; end <= str.length; end++) {
      substrings.push(str.slice(start, end));
    }
  }
  return substrings;
};
console.log(findAllSubstrings("abc"));
```

</details>

---

#### 7. Simulate a Simple ATM Withdrawal

Build a program that simulates an ATM. It should take an input amount and return the number of bills.  
Example: `$150 → 1x100, 1x50`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const atmWithdrawal = (amount) => {
  let bills = [100, 50, 20, 10, 5, 2, 1];
  let result = "";
  for (let bill of bills) {
    let count = Math.floor(amount / bill);
    if (count > 0) {
      result += `${count}x${bill} `;
      amount -= count * bill;
    }
  }
  return result.trim();
};
console.log(atmWithdrawal(188));
```

</details>

---

#### 8. Find the Majority Element in an Array

Write a function to find the element that appears more than half the time in an array, if it exists.  
Example: `[3, 3, 4, 3, 5, 3] → 3`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const findMajorityElement = (arr) => {
  let count = 0;
  let candidate = null;
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  count = 0;
  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }
  return count > arr.length / 2 ? candidate : null;
};
console.log(findMajorityElement([3, 3, 4, 3, 5, 3]));
console.log(findMajorityElement([1, 2, 3, 4, 5]));
```

</details>

---

#### 9. Shuffle an Array

Create a program that shuffles an array randomly.  
Example: `[1, 2, 3, 4] → [3, 1, 4, 2]`

<details>
<summary><strong>Solution</strong></summary>

```javascript
const shuffleArray = (arr) => {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
};
console.log(shuffleArray([1, 2, 3, 4]));
```

</details>

---

#### 10. Check if an Array is a Subsequence of Another

Write a function to check if one array is a subsequence of another.  
Example: `[1, 3, 5]` is a subsequence of `[1, 2, 3, 4, 5]`.

<details>
<summary><strong>Solution</strong></summary>

```javascript
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
```

</details>

---
