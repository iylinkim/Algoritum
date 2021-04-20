var myAtoi = function (s) {
  let temp = s.trim().split(" ");

  if (!parseInt(temp[0])) return 0;

  temp = temp.filter((elm) => parseInt(elm)).map((elm) => parseInt(elm));
  const filtered = Math.abs(temp[0]);

  const clamped = 2 ** 31;
  if (filtered >= clamped) {
    if (temp[0] > 0) {
      return clamped - 1;
    } else if (temp[0] < 0) {
      return -clamped;
    }
  }

  return temp[0];
};
