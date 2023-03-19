/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // If the strs array is empty, return an empty string
  if (!strs.length) {
  return "";
}

// Initialize the variable prefix with the first string in the array strs[0]
let prefix = strs[0];

// Loop through the rest of the strings in the array starting from the second string
for (let i = 1; i < strs.length; i++) {
  // While the current string strs[i] does not start with the prefix,  
  while (strs[i].indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, prefix.length - 1); // Remove the last character from the prefix, until it is a prefix of the current string or prefix becomes an empty string ""
    // If prefix becomes an empty string, return an empty string
    if (!prefix) {
      return "";
    }
  }
}

return prefix;
};
// Note: indexOf method is used to check if the prefix is a prefix of the current string