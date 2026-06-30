const arr = [1, 5, 3, 9, 6, 0, 3, 2];

function findZeroPosition(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      return i;
    }
  }
  return -1;
}

const position = findZeroPosition(arr);
console.log("Position of 0 is:", position);
