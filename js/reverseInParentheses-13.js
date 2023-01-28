// const inputString = "(bar)"; // "rab"
// const inputString = "foo(bar)baz"; // "foorabbaz"
// const inputString = "foo(bar)baz(blim)"; // "foorabbazmilb"
// const inputString = "foo(bar(baz))blim"; // "foobazrabblim"
// const inputString = ""; // ""
// const inputString = "()"; // ""
// const inputString = "123"; // ""
// const inputString = "("; // ""
// const inputString = ")"; // ""
// const inputString = "(123())"; // ""
const inputString = "co(de(fight)s)"; // "cosfighted"

function solution(inputString) {
  let regExp = /\(([^()]*)\)/i;
  if (!inputString.match(regExp)) return "";

  let match = inputString.match(/\(/g);
  for (let a = 0; a < match.length; a++) {
    inputString = inputString.replace(regExp, (string) =>
      string.split("").reverse().join("").replace(/\(|\)/g, "")
    );
  }
  return inputString;
}

console.log(solution(inputString));
// solution(inputString);

// 13/14, salf, documentation
