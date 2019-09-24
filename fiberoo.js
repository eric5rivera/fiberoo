function fib() {
  let result = [];
  result[0] = 0;
  result[1] = 1;
  for (let i = 2; i < 50; i++) {
    result.push(result[i-2] + result[i-1]);
  }

  return result;
}

console.log(fib());

function numsToStrings(nums) {
  return _.map(nums, num => `${num}`);

}
console.log(numsToStrings(fib()));

function numEvenNums(nums) {
  return _.size(_.filter(nums, (num) => num % 2 === 0));
}

console.log(numEvenNums(fib()));