const inputArray = ["aba", "aa", "ad", "vcd", "aba"];

function solution(arr) {
  let max = 0;
  let new_arr = [];
  for (let a = 0; a < arr.length; a++) {
    if (max < arr[a].length) {
      max = arr[a].length;
    }
  }
  for (let b = 0; b < arr.length; b++) {
    if (arr[b].length === max) {
      new_arr.push(arr[b]);
    }
  }
  console.log("new_arr", new_arr);
  return new_arr;
}

solution(inputArray);

//done, self