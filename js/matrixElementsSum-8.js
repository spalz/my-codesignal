const matrix1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
console.log(matrix1);

function solution(matrix) {
  let count = 0;
  for (let a = 0; a < matrix.length; a++) {
    let free_room = true;

    if (free_room) {
      for (let b = 0; b < matrix[a].length; b++) {
        if (matrix[a][b] === 0) {
          for (let c = a + 1; c < matrix.length; c++) {
            matrix[c][b] = 0;
          }
        } else {
          count = count + matrix[a][b];
        }
      }
    } else {
      free_room = false;
    }
  }
  return count;
}

console.log(solution(matrix1));

//done