function solution(n) {
  let a = 1;
  let b = 1;

  for (let i = 0; i < n - 1; i++) {
    let current = (a + b) % 1000000007;
    a = b;
    b = current;
  }

  return b;
}
