Here’s the cleanly formatted version of all the problems:

---

1. **Count Duplicates in an Array**

   Write a program to count how many elements in an array are duplicates (e.g., `[1, 2, 2, 3, 4, 4, 4]` → `2` because `2` and `4` are duplicates).

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const countDuplicatesInAnArray = (arr) => {
     let obj = {};
     let count = 0;

     for (let num of arr) {
       obj[num] = (obj[num] || 0) + 1;
     }

     for (let key in obj) {
       if (obj[key] > 1) {
         count++;
       }
     }

     return count;
   };

   console.log(countDuplicatesInAnArray([1, 2, 2, 3, 4, 4, 4])); // Output: 2

   const countDuplicatesInAnArray1 = (arr) => {
     const duplicates = [
       ...new Set(arr.filter((item, index) => arr.indexOf(item) !== index)),
     ];
     return duplicates.length;
   };

   console.log(countDuplicatesInAnArray1([1, 2, 2, 3, 4, 4, 4])); // Output: 2
   ```

   </details>

---

2. **Check for Armstrong Number**

   Create a function to check if a number is an Armstrong number (e.g., `153` → `1³ + 5³ + 3³ = 153`, so it’s true).

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const armstrongNumber = (num) => {
     const digits = num.toString();
     let sum = 0;

     for (let digit of digits) {
       sum += digit ** digits.length;
     }

     return sum === num;
   };

   console.log(armstrongNumber(153)); // true
   console.log(armstrongNumber(123)); // false
   ```

   </details>

---

3. **Find the Intersection of Multiple Arrays**

   Write a function to find the common elements across three or more arrays (e.g., `[1, 2, 3]`, `[2, 3, 4]`, `[3, 4, 5]` → `[3]`).

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const commonElements = (...arrays) => {
     if (arrays.length === 0) return [];
     return arrays.reduce(
       (common, array) => common.filter((item) => array.includes(item)),
       arrays[0]
     );
   };

   console.log(commonElements([1, 2, 3], [2, 3, 4], [3, 4, 5])); // Output: [3]
   ```

   </details>

---

4. **Convert Snake Case to Camel Case**

   Build a function to convert a string from snake_case to camelCase (e.g., `hello_world` → `helloWorld`).

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const convertSnakeToCamelCase = (str) => {
     return str
       .split("_")
       .map((word, index) =>
         index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
       )
       .join("");
   };

   console.log(convertSnakeToCamelCase("hello_world")); // Output: helloWorld
   ```

   </details>

---

5. **Count Consonants in a String**

   Write a program to count the number of consonants in a given string (e.g., `"hello"` → `3` consonants).

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const countConsonants = (str) => {
     const vowels = "aeiouAEIOU";
     let count = 0;

     for (let char of str) {
       if (!vowels.includes(char) && /[A-Za-z]/.test(char)) {
         count++;
       }
     }

     return count;
   };

   console.log(countConsonants("hello")); // Output: 3
   console.log(countConsonants("world")); // Output: 4
   ```

   </details>

---

6. **Find the Smallest and Largest Numbers in a String**

   Create a program to extract all numbers from a string and find the smallest and largest.

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const findSmallestLargest = (str) => {
     const numbers = str.match(/-?\d+/g)?.map(Number) || [];
     return {
       smallest: Math.min(...numbers),
       largest: Math.max(...numbers),
     };
   };

   console.log(findSmallestLargest("I have 3 apples and 10 bananas")); // { smallest: 3, largest: 10 }
   console.log(findSmallestLargest("The range is -5 to 20")); // { smallest: -5, largest: 20 }
   ```

   </details>

---

7. **Simulate a Dice Roll**

   Write a function to simulate rolling two dice and returning their sum.

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const rollTwoDices = () => {
     const dice1 = Math.floor(Math.random() * 6 + 1);
     const dice2 = Math.floor(Math.random() * 6 + 1);
     return `${dice1} + ${dice2} = ${dice1 + dice2}`;
   };

   console.log(rollTwoDices()); // Example output: 3 + 5 = 8
   ```

   </details>

---

8. **Check if Two Arrays are Equal**

   Build a program to check if two arrays contain the same elements in the same order.

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const areArraysEqual = (arr1, arr2) => {
     if (arr1.length !== arr2.length) return false;

     for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) return false;
     }

     return true;
   };

   console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
   console.log(areArraysEqual([1, 2], [1, 2, 3])); // false
   ```

   </details>

---

9. **Remove Falsy Values from an Array**

   Write a function to remove all falsy values (`false`, `0`, `null`, `undefined`, `NaN`, `""`) from an array.

   <details>
      <summary><strong>Solution</strong></summary>

   ```js
   const removeFalsyValues = (arr) => arr.filter(Boolean);

   console.log(removeFalsyValues([0, 1, false, 2, "", 3])); // [1, 2, 3]
   ```

   </details>

---

10. **Sum of Diagonal Elements in a 2D Array**

Create a function to calculate the sum of the diagonal elements in a 2D square matrix.

   <details>
      <summary><strong>Solution</strong></summary>

```js
const sumDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
};

console.log(
  sumDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: 15
```

   </details>

---
