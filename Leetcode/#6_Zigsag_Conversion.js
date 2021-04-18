const convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1 || s < numRows) return s;

  const rows = new Array(numRows).fill("");
  let count = 0;
  let goingDown = true;

  for (let i = 0; i < s.length; i++) {
    rows[count] += s[i];
    goingDown ? count++ : count--;

    if (count === 0 || count === numRows - 1) goingDown = !goingDown;
  }

  return rows.join("");
};
