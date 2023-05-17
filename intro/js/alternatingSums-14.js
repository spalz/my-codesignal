const a = [50, 60, 60, 45, 70]; //[180, 105]
// const a = [100, 50]; //[100, 50]
// const a = [80]; //[80, 0]
// const a = [100, 50, 50, 100]; //[150, 150]
// const a = [100, 51, 50, 100]; //[150, 151]

function solution(a) {
  let team_first = 0,
    team_second = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 != 1) {
      team_first = team_first + a[i];
    } else {
      team_second = team_second + a[i];
    }
  }
  return [team_first, team_second];
}

// solution = (a) =>
//   a.reduce(
//     (prev, item, idx) => {
//       console.log("idx & 1", idx & 1);
//       return (prev[idx & 1] += item), prev;
//     },
//     [0, 0]
//   );

console.log(solution(a));
// solution(a);

// done, salf
