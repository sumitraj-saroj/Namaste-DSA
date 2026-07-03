let arr = [7, 5, 3, 7, 3, 1, 9, 4, 1, 0, 10];

function insertionSort(a) {
  let n = a.length;
  for (let i = 1; i < n; i++) {
    let curr = a[i];
    let prev = i - 1;
    while (a[prev] > curr && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev + 1] = curr;
  }
  return arr;
}

let result = insertionSort(arr);

console.log(result);

// Time and Space COmplexity
// Time => O(n^2)
// Space COmplexity => O(1)
