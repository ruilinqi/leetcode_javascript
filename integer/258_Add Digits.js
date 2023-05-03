/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0
 */

/**
 * @param {number} num
 * @return {number}
 */
// Solution 1:
var addDigits = function(num) {
  while (num > 9) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // extracts the last digit of the input number, adds it to a sum
    num = Math.floor(num / 10); // removes the last digit from the input number by dividing it by 10 and rounding down to the nearest integer
  }
  num = sum; // Once the inner while loop finishes, we set the input number to the sum of all its digits
}
return num; 
};

console.log(addDigits(38)); // Output: 2
console.log(addDigits(0)); // Output: 0

// Solution 2:
var addDigits = function(num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};