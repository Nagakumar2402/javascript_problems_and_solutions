Here is your content, properly formatted in Markdown:

---

# 10 More Fresh JavaScript Problem Ideas for Beginners

1. **Convert Minutes to Hours and Minutes**

   - Write a program to convert a given number of minutes into hours and minutes (e.g., 130 minutes → 2 hours and 10 minutes).

   <details>
     <summary style="font-weight: bold">Answer</summary>

   ```js
   const convertMinutesToHours = (minutes) => {
     const hours = Math.floor(minutes / 60);
     const minute = minutes % 60;

     return `${hours} hours and ${minute} minutes`;
   };
   console.log(convertMinutesToHours(560));
   ```

   </details>

2. **Check if String Contains Only Digits**

   - Create a function to check if a given string contains only numeric characters.

   <details>
     <summary style="font-weight: bold">Answer</summary>

   ```js
   const isNumeric = (str) => {
     return /^[0-9]+$/.test(str);
   };
   console.log(isNumeric("123456"));
   console.log(isNumeric("1234ab"));

   const isNumeric1 = (str) => {
     if (str.length === 0) return false;
     for (let char of str) {
       if (char > "0" && char > "9") {
         return false;
       }
     }
     return true;
   };
   console.log(isNumeric1("123456"));
   console.log(isNumeric1("1234ab"));
   ```

   </details>

3. **Generate a Random Password**

   - Build a program to generate a random password of a specified length, including letters, numbers, and symbols.

   <details>
     <summary style="font-weight: bold">Answer</summary>

   ```js
   const generateARandomPassword = (num) => {
     const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const numbers = "0123456789";
     const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
     const allCharacters = letters + numbers + symbols;

     return Array.from(
       { length: num },
       () => allCharacters[Math.round(Math.random() * allCharacters.length)]
     ).join("");
   };
   console.log(generateARandomPassword(14));

   const generateARandomPassword1 = (num) => {
     const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const numbers = "0123456789";
     const symbols = "!@#$%^&_()_+[]{}|;:,.<>?";
     const allCharacters = letters + numbers + symbols;
     let password = "";
     for (let i = 0; i < num; i++) {
       password +=
         allCharacters[Math.round(Math.random() * allCharacters.length)];
     }
     return `The password is ${password}`;
   };
   console.log(generateARandomPassword1(6));
   ```

   </details>

4. **Check if Array Contains a Target Element**

   - Write a function to check if a specific value exists in an array.

   <details>
     <summary>Answer</summary>

   ```javascript
   // Using includes()
   const containsElement = (arr, target) => {
     return arr.includes(target);
   };
   console.log(containsElement([1, 2, 3, 4], 3)); // Output: true
   console.log(containsElement([1, 2, 3, 4], 5)); // Output: false

   // Using indexOf()
   const containsElement1 = (arr, target) => {
     return arr.indexOf(target) !== -1;
   };
   console.log(containsElement1([1, 2, 3, 4], 3)); // Output: true
   console.log(containsElement1([1, 2, 3, 4], 5)); // Output: false

   // Using a loop
   const containsElement2 = (arr, target) => {
     for (let ele of arr) {
       if (ele === target) {
         return true;
       }
     }
     return false;
   };
   console.log(containsElement2([1, 2, 3, 4], 3)); // Output: true
   console.log(containsElement2([1, 2, 3, 4], 5)); // Output: false

   // Using some()
   const containsElement4 = (arr, target) => {
     return arr.some((a) => a === target);
   };
   console.log(containsElement4([1, 2, 3, 4], 5)); // Output: false
   ```

   </details>

5. **Flatten a Nested Array**

   - Create a program to flatten a nested array (e.g., `[1, [2, [3, 4]]]` → `[1, 2, 3, 4]`).

   <details>
     <summary>Answer</summary>

   ```js
   const FlattenNestedArray = (arr) => {
     return arr.reduce((single, nestedArray) => {
       return single.concat(
         Array.isArray(nestedArray)
           ? FlattenNestedArray(nestedArray)
           : nestedArray
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
   ```

   </details>

6. **Find the Intersection of Two Arrays**

   - Write a function that returns the common elements between two arrays.
   <details>
     <summary style="font-weight: bold">Answer</summary>

   ```js

   ```

   </details>

7. **Find Missing Number in an Array**

   - Given an array of numbers from 1 to `n` with one number missing, find the missing number (e.g., `[1, 2, 4, 5]` → `3`).
   <details>
     <summary style="font-weight: bold">Answer</summary>

   ```js

   ```

   </details>

8. **Check for Balanced Parentheses**

   - Write a function to check if a string has balanced parentheses (e.g., `"(a+b)"` is balanced, `"(a+b))"` is not).
   <details>
     <summary style="font-weight: bold">Answer</summary>

   ```js

   ```

   </details>

9. **Calculate GCD (Greatest Common Divisor)**

   - Create a program to find the greatest common divisor of two numbers.
   <details>
      <summary style="font-weight: bold">Answer</summary>

   ```js

   ```

    </details>

10. **Count Words Starting with a Specific Letter**

- Build a function to count the number of words in a sentence that start with a given letter.
     <details>
     <summary style="font-weight: bold">Answer</summary>

  ```js

  ```

   </details>

---

These problems delve into different aspects of JavaScript, from array manipulation to algorithmic thinking. Let me know if you want even more!
