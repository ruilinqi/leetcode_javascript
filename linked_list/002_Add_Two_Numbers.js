/**
 * Answer the question of adding two numbers in javascript : 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
 * reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as 
 * a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example1: 
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * General Thinking:
 * we need to iterate over both linked lists and add the corresponding digits together. We also need to 
 * keep track of any carryover that occurs when the sum of two digits is greater than or equal to 10.
 * 
 */
var addTwoNumbers = function(l1, l2) {
  let head = null;
  let current = null;
  // Create two points and initialize points to the heads
  let p1 = l1;
  let p2 = l2;
  let carry = 0; //carry variable
  
  // Loop over both linked lists until both pointers are null
  while (p1 || p2) {
      // Add current values of the nodes together, with carry value
      let sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
      // If sum => 10, carry is 1; otherwise, carry is 0
      carry = sum >= 10 ? 1 : 0;
      // Create a new node with the sum and add it to the new linked list
      sum %= 10;// sum is the reminder with sum is divided by 10
      console.log("sum:", sum);
      let node = new ListNode(sum);
      console.log("node:", node);
      //advance both pointers to the next nodes in their respective linked lists
      if (!head) {
          head = node;
      } else {
          current.next = node;
      }
      current = node;
      
      p1 = p1 ? p1.next : null;
      p2 = p2 ? p2.next : null;
  }
  
  // Check if there is still a carry value. If there is, we need to create a new node with the carry value and add it to the new linked list.
  if (carry) {
      let node = new ListNode(carry);
      current.next = node;
  }
  // return the head of the new linked list
  return head;
};