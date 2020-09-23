const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// #1 Mutated data
// let total = 0;
// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }

// console.log(total);

// #2 Reduce
// const sum = (a, b) => a + b;
// const total = nums.reduce(sum);

// console.log(total);

// #3 Recursion
function sumArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }

  return sumArray(array.slice(1), total + array[0]);
}

console.log(sumArray(nums));
