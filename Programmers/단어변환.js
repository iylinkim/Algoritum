function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let count = 0;
  let nextWord;
  let answer = 0;

  begin = begin.split("");

  while (nextWord !== target) {
    for (let i = 0; i < words.length; i++) {
      const tempWord = words[i].split("");

      tempWord.filter((word, index) => {
        if (word !== begin[index]) count++;
        if (count === 2) {
          nextWord = words[index];
          words.splice(index, 1);
          answer++;
          count = 0;
        }
      });
    }
  }

  return answer;
}
