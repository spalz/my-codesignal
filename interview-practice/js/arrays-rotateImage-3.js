const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  //[7, 4, 1]
  //[8, 5, 2]
  //[9, 6, 3]
];

solution = (a) =>
  a.map((_, indexRow) => {
    return a
      .map((val) => {
        return val[indexRow];
      })
      .reverse();
  });

solution(a);
// console.log(solution(a));

// don't self
