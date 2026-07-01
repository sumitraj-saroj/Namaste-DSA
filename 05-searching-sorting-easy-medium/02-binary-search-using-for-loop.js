function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; left <= right; i++) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7));
