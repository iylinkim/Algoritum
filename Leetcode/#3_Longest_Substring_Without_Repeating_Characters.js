const lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLength = Math.max(maxLength, set.size);
      right++;
    } else {
      set.delete(s.charAt(left)); //중복된 문자가 있을 때 Set에서 삭제함
      left++;
    }
  }
  return maxLength;
};
