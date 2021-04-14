function pairs(k, arr) {
  const s = new Set(arr);
  return arr.reduce((acc, curr) => (s.has(curr - k) ? acc + 1 : acc), 0);
}
