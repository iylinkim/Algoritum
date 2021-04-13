function circularArrayRotation(a, k, queries) {
  let arr = a;
  let count = 0;
  let answer = [];

  while (count !== k) {
    for (let i = 0; i < a.length; i++) {
      if (count === k) break;
      const first = arr.pop();
      arr.unshift(first);
      count++;
    }
  }

  for (let j = 0; j < queries.length; j++) {
    answer.push(arr[queries[j]]);
  }
  return answer;
}
