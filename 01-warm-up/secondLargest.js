let arr = [4, 6, 9, 3, 6, 7, 19];

function secondLargest(arr) {
  let firstLargest = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      second = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

console.log(secondLargest(arr));
