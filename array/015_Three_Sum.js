/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
 * and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 */

function threeSum(nums) {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i === 0 || (i > 0 && sortedNums[i] !== sortedNums[i - 1])) {
      let left = i + 1;
      let right = sortedNums.length - 1;
      const target = 0 - sortedNums[i];

      while (left < right) {
        if (sortedNums[left] + sortedNums[right] === target) {
          result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);

          while (left < right && sortedNums[left] === sortedNums[left + 1]) {
            left++;
          }
          while (left < right && sortedNums[right] === sortedNums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sortedNums[left] + sortedNums[right] < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// Test cases
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1)); // Output: [[-1, -1, 2], [-1, 0, 1]]

const nums2 = [0, 1, 1];
console.log(threeSum(nums2)); // Output: []

const nums3 = [0, 0, 0];
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]