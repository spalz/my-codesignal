const dishe = [
  ["First", "a", "b", "c", "d", "e", "f", "g", "h", "i"],
  ["Second", "i", "h", "g", "f", "e", "x", "c", "b", "a"],
];

// [
//   ["a", "First", "Second"],
//   ["b", "First", "Second"],
//   ["c", "First", "Second"],
//   ["e", "First", "Second"],
//   ["f", "First", "Second"],
//   ["g", "First", "Second"],
//   ["h", "First", "Second"],
//   ["i", "First", "Second"],
// ];

function solution(dishes) {
  let a = 0;
  while (a < dishes.length) {
    console.log("a", a);
    a++;
  }
}

// solution(a);
console.log(solution(dishe));
