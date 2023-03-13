


function getX(x, nums) {
  nums.sort((a,b) =>  a - b);
  let answer = x - 1;
  return nums[answer];
}

// console.log(getX(2, nums));

// function getXWithoutSort(x, nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > nums[i + 1]) {
//       let moveMe = nums.shift(nums[i]);
//       console.log(nums);
//       nums.push(moveMe);
      
//     }
//   } return nums[x + 1];
// }

// console.log(getXWithoutSort(2, nums))