function sum(n) {
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}

// Sum of all odd numbers in array

function sumOdd(s) {
  isOdd = arr[s] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr[s] : 0;
  }
  return (isOdd ? arr[s] : 0) + sum(s - 1);
}
