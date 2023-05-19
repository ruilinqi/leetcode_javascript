/**
 * Given an integer array nums of length n and an integer target, find three integers in nums
 * such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.


Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closest sum with the sum of first three elements

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // Left pointer
    let right = nums.length - 1; // Right pointer

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        // If the sum is equal to the target, return the sum
        return sum;
      }

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Increment left pointer if the sum is less than the target
      } else {
        right--; // Decrement right pointer if the sum is greater than the target
      }
    }
  }

  return closestSum; // Return the closest sum found
}

// Test cases
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output: 0