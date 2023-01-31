const inputArray = [1, 1, 1]; // 3
// const inputArray = [-1000, 0, -2, 0]; // 5
// const inputArray = [2, 1, 10, 1]; // 12
// const inputArray = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]; // 13

function solution(inputArray) {
  var max = inputArray[0];
  var moves = 0;
  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= max) {
      moves += max - inputArray[i] + 1;
      inputArray[i] = max + 1;
    }
    max = inputArray[i];
  }
  return moves;
}

console.log(solution(inputArray));

// done, i don't self
