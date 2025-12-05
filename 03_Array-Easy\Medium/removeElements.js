/*Problem: Remove Element

You are given an integer array and a value val. Your task is to remove every occurrence of val from the array in-place. The remaining elements can appear in any order.

*/

var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};
