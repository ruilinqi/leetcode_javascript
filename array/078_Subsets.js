/**
 * Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


Example 2:

Input: nums = [0]
Output: [[],[0]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  // two nested for loops iterate through all the elements of nums and all the subsets in the result array, respectively.
  for (let i = 0; i < nums.length; i++) {
    const len = result.length;
    for (let j = 0; j < len; j++) {
      result.push([...result[j], nums[i]]);
      //create a new array containing the elements of the current subset and the current element of nums
    }
  }
  return result; 
};
