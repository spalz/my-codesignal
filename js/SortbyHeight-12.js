// let s1 = "zzzz";
// let s2 = "zzzzzzz";

let a = [-1, 150, 190, 170, -1, -1, 160, 180];

function solution(a) {
  let people = a.filter((el) => el != -1).sort((a, b) => b - a);
  for (let b = 0; b < a.length; b++) {
    a[b] !== -1 ? (a[b] = people.pop()) : null;
  }
  return a;
}

console.log(solution(a));

// solution(a);

// I didn't self
