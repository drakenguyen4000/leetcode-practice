nums = [2, 2, 1]

function singleNumber(nums) {
var x = 0;
  for(var i = 0; i < nums.length; i++){
  x = x^nums[i];
  }
  
  return x;
}
  
console.log(singleNumber( nums))