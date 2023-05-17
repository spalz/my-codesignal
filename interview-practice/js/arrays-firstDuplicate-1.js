const a = [2, 1, 3, 5, 3, 2]; // 3
// const a = [2, 2] // 2
// const a = [2, 4, 3, 5, 1] // -1
// const a = [1] // -1
// const a = [5, 5, 5, 5, 5] // 5
// const a = [2, 1] // -1
// const a = [2, 1, 3] // -1
// const a = [2, 3, 3] // 3
// const a = [3, 3, 3] // 3
// const a = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8] // 6
// const a = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3] // -1
// const a = [1, 1, 2, 2, 1] // 1

solution = (a) => {
  let b = new Set();
  for (let c = 0; c < a.length; c++) {
    if (b.has(a[c])) {
      return a[c];
    } else {
      b.add(a[c]);
    }
  }
  return -1;
};

// solution(a);
console.log(solution(a));


// don't self