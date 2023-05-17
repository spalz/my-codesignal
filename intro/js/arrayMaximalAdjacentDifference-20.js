// const inputArray = [2, 4, 1, 0]; // 3
// const inputArray = [1, 1, 1, 1]; // 0
// const inputArray = [-1, 4, 10, 3, -2]; // 7
// const inputArray = [10, 11, 13]; // 2
// const inputArray = [-2, -2, -2, -2, -2]; // 0
// const inputArray = [-1, 1, -3, -4]; // 4
const inputArray = [-14, 15, -15]; // 30

function solution(inputArray) {
  let max = 0;
  for (let a = 1; a < inputArray.length; a++) {
    let m = Math.max(
      inputArray[a - 1] - inputArray[a],
      inputArray[a] - inputArray[a - 1]
    );
    if (max < m) {
      max = m;
    }
  }
  return max;
}

console.log(solution(inputArray));

// done, self
