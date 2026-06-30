Problem: Reverse String

// You are given a string represented as an array of characters. Your task is to reverse the array in-place, meaning you must modify the original array directly without using extra memory beyond constant space.
var reverseString = function (s) {
  let len = s.length;
  let halflen = Math.floor(len / 2);
  for (i = 0; i < halflen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};
