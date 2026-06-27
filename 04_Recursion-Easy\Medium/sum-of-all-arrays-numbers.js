function sum(n) {
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}
