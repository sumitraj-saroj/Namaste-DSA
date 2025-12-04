let arr = [2, -9, 17, 1, -10, -4, 8];

function countNegative(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      x = x + 1;
    }
  }
  return x;
}

console.log(countNegative(arr));
