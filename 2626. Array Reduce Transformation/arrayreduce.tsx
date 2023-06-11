type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let val = fn(init, nums[0]);
  console.log(val);
  if (!nums.length) {
    return init;
  }
  for (let i = 1; i < nums.length; i++) {
    val = fn(val, nums[i]);
    console.log(val);
  }
  return val;
}
