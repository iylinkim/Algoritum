const nextPermutation = function (nums) {
  if (nums.length <= 1) return;

  let leftHandSwap;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      leftHandSwap = i;
      break;
    }
  }

  for (let i = nums.length - 1; i > leftHandSwap; i--) {
    if (nums[i] > nums[leftHandSwap]) {
      [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

      let chopped = nums.splice(leftHandSwap + 1);
      chopped.reverse();
      nums.push(...chopped);
      return nums;
    }
  }

  return nums.reverse();
};
