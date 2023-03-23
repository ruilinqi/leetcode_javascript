/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.

 An integer is a palindrome when it reads the same forward and backward.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // Convert integer to string
  const str = x.toString();

  // Use two pointers to compare the characters from the beginning and the end of the string
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
      if (str.charAt(left) !== str.charAt(right)) {
          return false;
      }
      left++;
      right--;
  }
  return true;
};