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

//Solution 2
function twoSum(nums, target){
  //Stores Numbers already encountered.
  const storedNumb = {};
   for(let i = 0; i < nums.length; i++){
    const currentNumb = nums[i];
    const neededNumb = target - nums[i];
    //Find if the needed number already exist in our storedNumb object.  Store result as index
    const index2 = storedNumb[neededNumb];
    //return stored index and current index if stored index is not null.  
    //Else store the current index in storedNunber Object with current number as it's property.  
    if(index2 != null){
      return [index2, i];
    } else {
      storedNumb[currentNumb] = i;
      }
   }
  return "No two digits form the sum."
}

console.log(twoSum(nums, target))