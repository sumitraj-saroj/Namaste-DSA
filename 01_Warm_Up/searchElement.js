let arr = [2, 5, 6, 4, 8, 9, 4, 10];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1; 
}

console.log(searchElement(arr, 9)) ;
