/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique 
 * element appears only once. The relative order of the elements should be kept the same. Then return the number of 
 * unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were 
present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 
respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

// Solution 1 : Using Array splice method
const removeDuplicates1 = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) { // compare the current element with the next element
            nums.splice(i + 1, 1); // If they are equal, we remove the next element using splice()
            i--; // Decrement the index i so that we re-check the current index with the new next element
        }
    }
};

// Solution 2 : For loop with continue
const removeDuplicates2 = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === nums[i]) continue; // If the elements are equal then continue else copy the unique element by then to "i+1" position
        nums[++i] = nums[j];
    }
    return i + 1;
}

// Solution 3 : For loop 
const removeDuplicates3 = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { //  If the elements are not equal then copy the unique element by then to "i+1" position
            nums[++i] = nums[j];
        }
    }
    return i + 1;
}

// Solution 4 :  While loop
const removeDuplicates4 = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
}