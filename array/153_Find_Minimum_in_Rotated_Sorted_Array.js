/**
 * Question 153:
 * Answer the question of Find Minimum in Rotated Sorted Array in javacript: Suppose an array of length n sorted in 
 * ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.


Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 */

/**
 * General Thinking:
 * To find the minimum element in a rotated sorted array, we can use a binary search approach. 
 * We can compare the mid element with the left and right elements to determine which half of 
 * the array contains the minimum element. We can repeat this process until we find the minimum 
 * element.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // Initialize the start (left) and end (right) of the array
  let left = 0;
  let right = nums.length - 1;
  
  //use a while loop to repeatedly divide the array in half and narrow down the search range until we find the minimum element 
  while (left < right) {
      let mid = Math.floor((left + right) / 2);

      //If the value at the mid index is greater than the value at the right index, then we know that the minimum element must be in the right half of the array, so we update the left index to mid + 1
      if (nums[mid] > nums[right]) left = mid + 1;
      //Otherwise, the minimum element must be in the left half of the array, so we update the right index to mid.
      else right = mid;
  }
  return nums[left];
};

// Solution 2:
// var findMin = function(nums) {
//   const find = (start, end) => {
//       if (end === start + 1 || start === end) return Math.min(nums[start], nums[end]);
//       const mid = Math.floor((start + end)/2);
//       if (nums[mid] > nums[end]) {
//           return find(mid, end);
//       } else {
//           return find(start, mid);
//       }
//   }
//   return find(0, nums.length-1);
// };