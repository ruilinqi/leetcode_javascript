/**
 * Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not 
include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


Example 2:

Input: n = 2
Output: false
 */

// Solution 1:
var isHappy = function(n) {
  let num = n;

// a function to calculate the product of digits
  function calculateSum(num) {
    let sum = 0;
    while (num != 0) {
      sum += (num%10) * (num%10)
      num = Math.trunc(num / 10);
    }
    return (sum)
  }

  let obj = {};

// here I've created an object in which we check and store if
// object already has the number inside of it
  while (num !== 1 && !obj[num]) {
      obj[num] = true;
      num = calculateSum(num);
  }
  return (num === 1 ? true : false);
};

// Solution 2:
var isHappy = function(n) {
  const seen = new Set(); // Keep track of previously seen numbers
    while (n !== 1 && !seen.has(n)) { // Repeat the process until the number equals 1 or it loops endlessly
      seen.add(n); // Add n to the set of previously seen numbers
      let sum = 0;
      while (n > 0) { // Replace the number by the sum of the squares of its digits
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
      }
      n = sum; // Assign sum to n for next iteration
    }
    return n === 1; // Return true if n is a happy number, and false if not
}