// let s1 = "zzzz";
// let s2 = "zzzzzzz";

let n = 1230;
console.log("n", n);

function solution(n) {
  const to_array = n.toString().split("");
  const half = to_array.length / 2;
  const first = to_array.slice(0, half).reduce((a, b) => Number(a) + Number(b));
  const second = to_array.slice(-half).reduce((a, b) => Number(a) + Number(b));
  return first === second ? true : false;
}

console.log(solution(n));

//done, salf
