const nums = [2,7,11,15];
const target = 9;
//Brute method    
function twoSum(nums, target){
  for(let i = 0; i < nums.length - 1; i++ ) {
    for(let j = 1; j < nums.length; j++){
      let sum = nums[i] + nums[j];
      if( sum === target){
        return [i, j]
      }
    }
  }
  return "No two digits form the sum."
}


console.log(twoSum(nums, target))