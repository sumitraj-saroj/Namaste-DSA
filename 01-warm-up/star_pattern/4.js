let n = 5;

for (i = 0; i < n; i++) {
  let row = '';
  for (j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
