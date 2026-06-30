let arr = [0, 1];
let n = 5;

for (let i = 2; i <= n; i++) {
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
}

console.log(arr);
