let n = 5;
let button = 1;
for (let i = 0; i < n; i++) {
  let row = '';
  for (j = 0; j < i + 1; j++) {
    row = row + button;

    if (button == 1) {
      button = 0;
    } else {
      button = 1;
    }
  }
  console.log(row);
}
