/**
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra 
space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1


Example 2:

Input: nums = [4,1,2,1,2]
Output: 4


Example 3:

Input: nums = [1]
Output: 1
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1: use the XOR (^) operator to cancel out pairs of identical numbers
var singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
      result ^= nums[i];
      /**
       * If an element appears twice, the two XOR operations will cancel each other out 
       * and leave result unchanged. But if an element appears only once, it will be XOR-ed 
       * with 0 (in the first iteration) and the resulting value will be the number itself.
       */
  }
  return result; // After iterating through the whole array, result will hold the single number that appears only once.
};

// Solution 2: calculate the difference between the sum of the unique numbers and the sum of all the numbers
function findSingleNumber(nums) {
  const numSet = new Set(); // create a Set to keep track of unique numbers
  let sumSet = 0; // variable to keep track of the sum of the numbers in the set
  let sumArray = 0; // variable that the sum of all the numbers in the array
  for (const num of nums) { // loop through the array
    if (!numSet.has(num)) {
      numSet.add(num);
      sumSet += num; // If the number is not in the set, we add it to the set and add it to the sumSet
    }
    sumArray += num;// We always add the number to sumArray
  }
  return 2 * sumSet - sumArray; // calculate the difference
}



