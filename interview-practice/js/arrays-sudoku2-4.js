// const grid = [
//   [".", ".", ".", "1", "4", ".", ".", "2", "."],
//   [".", ".", "6", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", "1", ".", ".", ".", ".", ".", "."],
//   [".", "6", "7", ".", ".", ".", ".", ".", "9"],
//   [".", ".", ".", ".", ".", ".", "8", "1", "."],
//   [".", "3", ".", ".", ".", ".", ".", ".", "6"],
//   [".", ".", ".", ".", ".", "7", ".", ".", "."],
//   [".", ".", ".", "5", ".", ".", ".", "7", "."],
// ]; // true
// const grid = [
//   [".", ".", ".", ".", "2", ".", ".", "9", "."],
//   [".", ".", ".", ".", "6", ".", ".", ".", "."],
//   ["7", "1", ".", ".", "7", "5", ".", ".", "."],
//   [".", "7", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", "8", "3", ".", ".", "."],
//   [".", ".", "8", ".", ".", "7", ".", "6", "."],
//   [".", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", "1", ".", "2", ".", ".", ".", ".", "."],
//   [".", "2", ".", ".", "3", ".", ".", ".", "."],
// ]; // false
// const grid = [
//   [".", ".", "4", ".", ".", ".", "6", "3", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   ["5", ".", ".", ".", ".", ".", ".", "9", "."],
//   [".", ".", ".", "5", "6", ".", ".", ".", "."],
//   ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
//   [".", ".", ".", "7", ".", ".", ".", ".", "."],
//   [".", ".", ".", "5", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
// ]; // false
// const grid = [
//   [".", ".", ".", ".", ".", ".", ".", ".", "2"],
//   [".", ".", ".", ".", ".", ".", "6", ".", "."],
//   [".", ".", "1", "4", ".", ".", "8", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", "3", ".", ".", ".", "."],
//   ["5", ".", "8", "6", ".", ".", ".", ".", "."],
//   [".", "9", ".", ".", ".", ".", "4", ".", "."],
//   [".", ".", ".", ".", "5", ".", ".", ".", "."],
// ]; // true
// const grid = [
//   [".", "9", ".", ".", "4", ".", ".", ".", "."],
//   ["1", ".", ".", ".", ".", ".", "6", ".", "."],
//   [".", ".", "3", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "7", ".", ".", ".", ".", "."],
//   ["3", ".", ".", ".", "5", ".", ".", ".", "."],
//   [".", ".", "7", ".", ".", "4", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", "7", ".", ".", ".", "."],
// ]; // true
// const grid = [
//   ["7", ".", ".", ".", "4", ".", ".", ".", "."],
//   [".", ".", ".", "8", "6", "5", ".", ".", "."],
//   [".", "1", ".", "2", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "9", ".", ".", "."],
//   [".", ".", ".", ".", "5", ".", "5", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", "2", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
// ]; // false
// const grid = [
//   [".", "4", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", "4", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "1", ".", ".", "7", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "3", ".", ".", ".", "6", "."],
//   [".", ".", ".", ".", ".", "6", ".", "9", "."],
//   [".", ".", ".", ".", "1", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", "2", ".", "."],
//   [".", ".", ".", "8", ".", ".", ".", ".", "."],
// ]; // false
// const grid = [
//   [".", ".", "5", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "8", ".", ".", ".", "3", "."],
//   [".", "5", ".", ".", "2", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "9"],
//   [".", ".", ".", ".", ".", ".", "4", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "7"],
//   [".", "1", ".", ".", ".", ".", ".", ".", "."],
//   ["2", "4", ".", ".", ".", ".", "9", ".", "."],
// ]; // false
// const grid = [
//   [".", ".", ".", "2", ".", ".", "6", ".", "."],
//   [".", ".", ".", "1", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "5", ".", "1", ".", ".", "8"],
//   [".", "3", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "9", ".", ".", ".", ".", "3"],
//   ["4", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", "3", "8", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "4"],
// ]; // true

// const grid = [
//   [".", ".", ".",    ".", ".", ".",    ".", ".", "."],
//   [".", ".", ".",    ".", ".", ".",    ".", ".", "."],
//   [".", "9", ".",    ".", ".", ".",    ".", ".", "1"],

//   ["8", ".", ".",    ".", ".", ".",    ".", ".", "."],
//   [".", "9", "9",    "3", "5", "7",    ".", ".", "."],
//   [".", ".", ".",    ".", ".", ".",    ".", "4", "."],

//   [".", ".", ".",    "8", ".", ".",    ".", ".", "."],
//   [".", "1", ".",    ".", ".", ".",    "4", ".", "9"],
//   [".", ".", ".",    "5", ".", "4",    ".", ".", "."],
// ]; // false

// const grid = [
//   ["1.", "2.", "3.", ".", ".", ".", ".", ".", "."],
//   ["4.", "5.", "6.", ".", ".", ".", ".", ".", "."],
//   ["7.", "8.", "9.", ".", ".", ".", ".", ".", "."],

//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],

//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
// ]; // false

// const grid = [
//   ["1.", "10.", "19.", ".", ".", ".", ".", ".", "."],
//   ["2.", "11.", "20.", ".", ".", ".", ".", ".", "."],
//   ["3.", "12.", "21.", ".", ".", ".", ".", ".", "."],

//   ["4.", "13.", "22.", ".", ".", ".", ".", ".", "."],
//   ["5.", "14.", "23.", ".", ".", ".", ".", ".", "."],
//   ["6.", "15.", "24.", ".", ".", ".", ".", ".", "."],

//   ["7.", "16.", "24.", ".", ".", ".", ".", ".", "."],
//   ["8.", "17.", "25.", ".", ".", ".", ".", ".", "."],
//   ["9.", "18.", "26.", ".", ".", ".", ".", ".", "."],
// ]; // false
// const grid = [
//   [".1", ".10", ".", "1", "10", "20", ".", ".", "."],
//   [".2", ".11", ".", "2", "11", "20", ".", ".", "."],
//   [".3", ".12", ".", "3", "12", "21", ".", ".", "."],

//   [".4", ".13", ".", "4", "13", "22", ".", ".", "."],
//   [".5", ".14", ".", "5", "14", "23", ".", ".", "."],
//   [".6", ".15", ".", "6", "15", "24", ".", ".", "."],

//   [".7", ".16", ".", "7", "16", "24", ".", ".", "."],
//   [".8", ".17", ".", "8", "17", "25", ".", ".", "."],
//   [".9", ".18", ".", "9", "18", "26", ".", ".", "."],
// ]; // false

const grid = [
  [".", "4", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "1", ".", ".", "7", ".", "."],

  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", ".", ".", ".", "6", "."],
  [".", ".", ".", ".", ".", "6", ".", "9", "."],

  [".", ".", ".", ".", "1", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "8", ".", ".", ".", ".", "."],
]; // false

// function solution(grid) {
//   let arr_ver = [];
//   for (let r = 0; r < 9; r++) {
//     //check horizontal
//     let arr_hor = grid[r].filter((i) => i !== ".").sort();
//     for (let h = 0; h < arr_hor.length; h++) {
//       if (arr_hor[h] === arr_hor[h + 1]) {
//         return false;
//       }
//     }

//     //create vertical array
//     let a_ver = [];
//     for (let i = 0; i < 9; i++) {
//       a_ver.push(grid[i][r]);
//     }
//     arr_ver.push(a_ver);
//   }

//   //check vertical
//   for (let r = 0; r < 9; r++) {
//     let arr_ver_sort = arr_ver[r].filter((i) => i !== ".").sort();
//     for (let h = 0; h < arr_ver_sort.length; h++) {
//       if (arr_ver_sort[h] === arr_ver_sort[h + 1]) {
//         console.log(arr_ver_sort[h], arr_ver_sort[h + 1]);
//         return false;
//       }
//     }
//   }

//   return true;
// }

function solution(grid) {
  const valid = (cb) => {
    for (let i = 0; i < 9; i++) {
      const set = new Set();
      for (let j = 0; j < 9; j++) {
        const item = cb(i, j);
        if (item !== ".") {
          if (set.has(item)) {
            return false;
          } else {
            set.add(item);
          }
        }
      }
      console.log(set);
    }
    return true;
  };

  return (
    valid((i, j) => grid[i][j]) &&
    valid((i, j) => grid[j][i]) &&
    valid(
      (i, j) =>
        grid[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]
    )
  );
}

// solution(grid);
console.log(solution(grid));

//
