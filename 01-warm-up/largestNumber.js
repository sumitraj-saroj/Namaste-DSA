let arr = [3, 7, 4, 76, 98, 422, 4, 7];

function largestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumber(arr));
