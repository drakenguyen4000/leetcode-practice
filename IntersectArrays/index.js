//Intersection of Two Arrays II

//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]

var intersect = function(nums1, nums2) {
    //Make the longest array the first array
    if(nums1.length < nums2.length){
      let tempNum = nums1;
          nums1 = nums2;
          nums2 = tempNum;
    }
  const compareNums1 = {};
  // Loop over first array and store as object
  for (const key of nums1) {
      compareNums1[key] = "";
 }
  
  const intersectList = [];
  //loop over nums2 array and check to see if the number exist as a key inside our compareNums1
  for(const key of nums2){
    if(compareNums1[key] != null){
      intersectList.push(key)
    }  
  }
  return intersectList;
};
