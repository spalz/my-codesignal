// const inputString = "aabb"; // true
// const inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"; // false
// const inputString = "abbcabb" // true
// const inputString = "zyyzzzzz" // true
// const inputString = "z" // true
// const inputString = "zaa" // true
// const inputString = "abca" // false
// const inputString = "abcad" // false
// const inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa" // false
const inputString = "abdhuierf" // false

function solution(inputString) {
  let array = inputString.split("");
  let duplicates = [...new Set(array)].map(
    (value) => array.filter((str) => str === value).length
  );

  let odd_count = 0;
  for (let a = 0; a < duplicates.length; a++) {
    if (duplicates[a] % 2 === 1) {
      odd_count++;
    }
  }
  return odd_count <= 1;
}

console.log(solution(inputString));

// done, fifty-fifty, documentation
