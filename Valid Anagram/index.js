// let s = "anagram";
// let t = "nagaram";
let s = "a";
let t = "ab";

var isAnagram = function(s, t) {
  //Check to make sure both strings are equal in length.
  if (s.length !== t.length) {
    return false;
  }
  //take s and t and store in array
  const arrS = s.split("");
  const arrT = t.split("");
  //Take s and t store as an obj
  const objS = {};
  const objT = {};
  arrS.forEach((el) => {
    if (!objS[el]) {
      objS[el] = 1;
    } else {
      objS[el] += 1;
    }
  })
  arrT.forEach((el, i) => {
    if (!objT[el]) {
      objT[el] = 1;
    } else {
      objT[el] += 1;
    }
  })

  let isAnagram = true;
  //Check if same number of letters exist in both objects
  arrS.forEach((el) => {
    if (objS[el] !== objT[el]) {
      isAnagram = false;
    }
  })
  return isAnagram;
};

isAnagram(s, t);