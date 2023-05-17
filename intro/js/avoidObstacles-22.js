// const inputArray = [5, 3, 6, 7, 9]; // 4
// const inputArray = [2, 3]; // 4
const inputArray = [1, 4, 10, 6, 2]; // 7

function solution(inputArray) {
  let count = 0;
  for (let a = 0; a < 20; a++) {
    count = count + count;
    if (inputArray.indexOf(count) === -1) {
      return count;
    } else {
      return false;
    }
  }
}

console.log(solution(inputArray));

//
