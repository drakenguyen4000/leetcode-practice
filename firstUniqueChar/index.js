// const s = "leetcode";
// const s = "aabb";
const s = "loveleetcode";

var firstUniqChar = function(s) {
  //Take string and convert to array
  const arr = s.split("");
  const obj = {};
  //Take array and loop over same array
  arr.forEach((el) => {
    //Store array as object
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  })

  let char = -1;
  let i = 0;
  //loop array, stop when any element equals 1. 
  while (i < arr.length) {
    if (obj[arr[i]] === 1) {
      return char = i;
    }
    i = i + 1;
  }
  return char;
};

firstUniqChar(s);