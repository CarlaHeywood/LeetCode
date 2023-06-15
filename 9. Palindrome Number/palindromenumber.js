/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  y = String(x).split("").reverse().join("");
  console.log(y);
  if (y === String(x)) return true;
  else return false;
};
