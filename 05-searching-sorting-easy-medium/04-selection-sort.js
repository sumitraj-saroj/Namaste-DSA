let arr = [2, 5, 3, 7, 9, 4, 10, 76, 34];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      //Improvement
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let result = selectionSort(arr);

console.log(result);

//Time complexity --> O(n^2)
//
//Space complexity --> O(1)
