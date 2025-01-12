Here are 10 basic JavaScript problem ideas for beginners to practice coding skills:

1. **Even or Odd Checker**

   - Write a function to check if a given number is even or odd.

```javascript
function isEvenOrOdd(num) {
  debugger;
  if (num % 2 == 0) {
    console.log(`the number  ${num} is even`);
  } else {
    console.log(`the number ${num} is odd`);
  }
}
isEvenOrOdd(81);
```

2. **Find the Largest Number**

   - Create a program to find the largest number in an array of numbers.

```javascript
const findLargeNumber = (arr) => {
  if (arr?.length == 0) return null;

  return arr?.reduce(
    (max, current) => (max >= current ? max : current),
    -Infinity
  );
};
/*
Why Use -Infinity?
-Infinity is the smallest possible value, and using it ensures that any value from the array will be larger than the initial value.
This is a good technique for finding the largest number without needing to rely on assumptions about the range of values in the array.
*/
console.log(findLargeNumber([29, 42, 15, 68]));
console.log(findLargeNumber([]));
----
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
----
const findLargeNumber2 = (arr) => {
  return arr.reduce(
    (maximum, current) => (maximum < current ? current : maximum),
    arr[0]
  );
};
console.log(findLargeNumber2([29, 42, 15, 68]));
----
const findLargeNumber3 = (arr) => {
  return Math.max(...arr);
};
console.log(findLargeNumber3([1, 5, 7, 9]));
```

3. **Reverse a String**

   - Write a program that reverses a given string.

```javascript
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
/*
split(''): Converts the string into an array of characters.
reverse(): Reverses the array of characters.
join(''): Joins the array back into a string.
*/
console.log(reverseString("Naga Kumar"));

const reverseString1 = (str) => {
  let reverseStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};
console.log(reverseString1("java script"));
```

4. **Factorial Calculator**

   - Create a function to calculate the factorial of a given number.

```javascript
// that is, multiply all the integers together from 5 down to 1

const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

console.log(factorial(5));

const factorialRecursion = (num) => {
  if (num === 0) return 1;

  return num * factorialRecursion(num - 1);
};
console.log(factorialRecursion(5));
```

5. **Sum of Array Elements**

   - Write a program to calculate the sum of all elements in an array.

```js
const sumOfArrEle = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfArrEle([1, 2, 3, 4, 5]));

const sumOfArrEle1 = (arr) => {
  return arr.reduce((ini, cur) => ini + cur, 0);
};
console.log(sumOfArrEle1([1, 2, 3, 4, 5]));
```

6. **Find the Vowels**

   - Create a function that counts the number of vowels in a given string.

```js
const findVowels = (str) => {
  let obj = {};

  for (const key of str) {
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  return obj;
};
console.log(findVowels("naga kumar"));
---------
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
-------
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
--------
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

console.log(findVowels1("naga kumar")); // Outputs: { a: 4, u: 1 }
---------
const countVowels1 = (str) => {
  return str.split("").filter((char) => /[aeiouAEIOU]/.test(char)).length;
};
console.log(countVowels1("naga kumar"));
```

7. **Check for Prime Number**

   - Write a function to determine if a given number is prime or not.

```js
const isPrime = (num) => {
  if (num === "") return;
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
let num = 100;
console.log(
  isPrime(num) ? `${num} is a prime number` : `${num} is not a prime number`
);

const findPrimeNum = (num) => {
  let primeNum = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primeNum.push(i);
  }
  return primeNum;
};
console.log(findPrimeNum(100));

console.log(Math.sqrt(100));
```

8. **Remove Duplicates from an Array**

   - Create a program to remove duplicate values from an array and return the unique elements.

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

const removeDuplicates1 = (arr) => {
  return arr.filter((unique, index) => arr.indexOf(unique) === index);
};
console.log(removeDuplicates1([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));

const removeDuplicates2 = (arr) => {
  let unique = [];
  for (let value of arr) {
    if (!unique.includes(value)) unique.push(value);
  }
  return unique;
};
console.log(removeDuplicates2([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));

const removeDuplicates3 = (arr) => {
  return arr.reduce((unique, value) => {
    if (!unique.includes(value)) unique.push(value);
    return unique;
  }, []);
};
console.log(removeDuplicates3([1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 3]));
```

9. **Generate a Random Number**

   - Write a program to generate a random number within a specified range.

```js
const generateRandomNumber = (num) => {
  return Math.round(Math.random() * num + 1);
};

console.log(generateRandomNumber(100));

const randomDecimalInRange = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

console.log(randomDecimalInRange(1, 100));
```

10. **Sort an Array**

- Implement a program that sorts an array of numbers in ascending or descending order.

```js
const sortArrayNum = (arrNum) => {
  return arrNum.sort((a, b) => b - a);
};

console.log(sortArrayNum([30, 39, 40, 27, 20, 1, 4, 6]));

// Quick Sort (Recursive)
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
