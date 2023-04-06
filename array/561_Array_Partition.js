/**
 * Write the answer in javascript: Given an integer array nums of 2n integers, 
 * group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that 
 * the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

 
Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.


Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + 
min(6, 6) = 1 + 2 + 6 = 9.
 * 
 */


/**
 * Answer:
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  // pseduo code:
  // sort the numbers from small to big
  // get the min value of the pair
  // find the sum of min


  // sort numbers // [1,3,4,2] => [1,2,3,4]
  nums.sort((a,b) => a - b);
  
  var sum = 0;
  // Iterate over the sorted array and add the minimum of each pair to the sum
  for (let i = 0; i<nums.length; i+=2) {
      sum += nums[i];
  }
  return sum;
};