let n = -567;
let nCopy = n;

n = Math.abs(n);

function reverseInteger(n) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  let limit = Math.pow(2,31);
  if(rev< -limit || rev > limit) return 0;
  return nCopy ? -rev : rev;
}

console.log(reverseInteger(n));
