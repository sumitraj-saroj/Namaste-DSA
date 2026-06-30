// Problem: Remove Duplicates from a Sorted Array

// You are given an integer array that is already sorted in non-decreasing order. Your task is to remove repeated values in-place so that each distinct number appears only once.

// After processing, the array should start with all unique elements in sorted order. You must return the count k, which represents the number of unique values.
// Any elements beyond index k - 1 can be ignored.

var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
