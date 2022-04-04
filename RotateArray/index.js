const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

//Solutions 1
let arrayEnd = nums.length - 1;
function rotate(nums, k) {
  let counter = 0;
  while (counter < k) {
    let num = nums.splice(arrayEnd, 1)[0];
    nums.unshift(num);
    counter++;
  }
  return nums;
}

console.log(rotate(nums, k));

//Solutions 2
function reverse(nums, start, end) {
  //reverse array, set start to end and end to start
  while (start < end) {
    [nums[end], nums[start]] = [nums[start], nums[end]];
    start++;
    end--;
  }
}

function rotate2(nums, k) {
  k = k % nums.length;
  //reverse array using reverse method
  nums.reverse();
  //reverse array first set
  reverse(nums, 0, k - 1);
  //reverse second set of numbers
  reverse(nums, k, nums.length - 1);

  return nums;
}

console.log(rotate2(nums, k));
