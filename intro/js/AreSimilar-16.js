// const a = [1, 2, 3];
// const b = [1, 2, 3]; // true
// const a = [1, 2, 3];
// const b = [2, 1, 3]; // true
// const a = [1, 2, 2]
// const b = [2, 1, 1] //false
// const a = [1, 2, 1, 2]
// const b = [2, 2, 1, 1] // true
// const a = [1, 2, 1, 2, 2, 1];
// const b = [2, 2, 1, 1, 2, 1]; // true
// const a = [1, 1, 4]
// const b = [1, 2, 3] // false
// const a = [1, 2, 3]
// const b = [1, 10, 2] // false
const a = [2, 3, 1];
const b = [1, 3, 2]; // true
// const a = [2, 3, 9]
// const b = [10, 3, 2] // false
// const a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
// const b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]; // false

function solution(a, b) {
  discrepancies = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      discrepancies++;
    }
  }
  a.sort();
  b.sort();
  return JSON.stringify(a) === JSON.stringify(b) && discrepancies < 3;
}

console.log(solution(a, b));

// solution(a);

// done, not self
