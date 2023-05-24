/**
 * You are given a large integer represented as an integer array digits, where each 
 * digits[i] is the ith digit of the integer. The digits are ordered from most significant 
 * to least significant in left-to-right order. The large integer does not contain any 
 * leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].


Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 */

function plusOne(digits) {
  const n = digits.length;
  
  // Increment the last digit by 1
  digits[n - 1] += 1;
  
  // It iterates through the digits from right to left, handling any carryover to the next digit.
  let carry = 0;
  for (let i = n - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  
  // If there's still a carryover, insert it at the beginning of the array
  if (carry > 0) {
    digits.unshift(carry);
  }
  
  return digits;
}

console.log(plusOne([1, 2, 3]));    // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9]));          // Output: [1, 0]
// The function plusOne takes an array of digits as input and increments the large integer represented by it. It starts by incrementing the last digit by 1. Then, it iterates through the digits from right to left, handling any carryover to the next digit. Finally, if there's still a carryover after iterating through all the digits, it inserts it at the beginning of the array. The updated array is then returned as the result.






