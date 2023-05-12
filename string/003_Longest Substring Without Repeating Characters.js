/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */

// Solution 1: a sliding window approach to keep track of the longest substring without repeating characters seen so far
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  // left variable - the left endpoint of the current substring
  // right variable - the right endpoints of the current substring
  let right = 0;
  let left = 0;
  // set stores the characters that have been seen so far
  const set = new Set;

  //loops through the string while expanding the right endpoint of the substring until a repeating character is found
  while (s.length > right) {
      if (!set.has(s.charAt(right))) {
          set.add(s.charAt(right));
          right++;
          longest = Math.max(longest, right-left);

      } else {
        // when a repeated character is found
        // the left endpoint is shifted to the right, and the corresponding character is removed from the set
          set.delete(s.charAt(left));
          left++;
      }
  }
  return longest;
};

// Solution 2:  a sliding window approach - it uses an object charMap to store the index of the last occurrence of each character seen so far
function longestSubstringLength(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = {};

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const previousCharIndex = charMap[currentChar];

    if (previousCharIndex !== undefined && previousCharIndex >= start) {
      maxLength = Math.max(maxLength, i - start);
      start = previousCharIndex + 1;
    }

    charMap[currentChar] = i;
  }

  return Math.max(maxLength, s.length - start);
}