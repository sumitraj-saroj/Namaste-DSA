// arr = [2, 65, 7, 2, 8, 4, 5, 789, 653, 80];
//
// let nums = arr.sort((a, b) => a - b);
//
// console.log(nums);
//
let arr = [5, 3, 8, 3, 5, 7, 9, 2, 11, 21];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

let result = bubbleSort(arr);

console.log(result);
