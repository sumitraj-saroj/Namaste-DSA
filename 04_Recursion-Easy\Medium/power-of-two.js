function powerofTwo(n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;
  return powerofTwo(n / 2);
}

powerofTwo(n);
