let n = 5;

for (i = 0; i < n; i++) {
  let row = '';
  for (j = 0; j < n - (i + 1); j++) {
    row = row + ' ';
  }
  for (k = 0; k < i + 1; k++) {
    row = row + '*';
  }
  console.log(row);
}
