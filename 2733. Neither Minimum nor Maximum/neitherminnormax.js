/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let max = nums[0];
  let min = nums[0];

  for (let i = 0; i < nums.length; i++)
    if (max < nums[i]) {
      max = nums[i];
    }
  for (let i = 0; i < nums.length; i++)
    if (min > nums[i]) {
      min = nums[i];
    }
  // No inbetween
  if (min + 1 == max || max - 1 == min || max == min || nums.length == 2) {
    return -1;
  }

  let i = 0;
  let result = min;
  while (result == min || result == max) {
    result = nums[i];
    i++;
  }

  return result;
};
