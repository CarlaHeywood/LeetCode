/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let symbol = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let temp = [0];

  if (s.includes("IV")) {
    s = s.replace("IV", "IIII", 1);
    console.log(s, "IV");
  }
  if (s.includes("IX")) {
    s = s.replace("IX", "VIIII", 1);
    console.log(s, "IX");
  }
  if (s.includes("XL")) {
    s = s.replace("XL", "XXXX", 1);
    console.log(s, "XL");
  }
  if (s.includes("XC")) {
    s = s.replace("XC", "LXXXX", 1);
    console.log(s, "XC");
  }
  if (s.includes("CD")) {
    s = s.replace("CD", "CCCC", 1);
    console.log(s, "CD");
  }
  if (s.includes("CM")) {
    s = s.replace("CM", "DCCCC", 1);
    console.log(s, "CM");
  }

  for (let i = 0; i < s.length; i++) {
    console.log(i);
    if (s[i] === "I") {
      temp.splice(i, 0, 1);
      console.log(s[i], temp);
    } else if (s[i] === "V") {
      temp.splice(i, 0, 5);
      console.log(s[i], temp);
    } else if (s[i] === "X") {
      temp.splice(i, 0, 10);
      console.log(s[i], temp);
    } else if (s[i] === "L") {
      temp.splice(i, 0, 50);
      console.log(s[i], temp);
    } else if (s[i] === "C") {
      temp.splice(i, 0, 100);
      console.log(s[i], temp);
    } else if (s[i] === "D") {
      temp.splice(i, 0, 500);
      console.log(s[i], temp);
    } else if (s[i] === "M") {
      temp.splice(i, 0, 1000);
      console.log(s[i], temp);
    } else {
      break;
    }
  }

  let result = temp.reduce((a, b) => a + b, 0);
  return result;
};
