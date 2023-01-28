// const picture = ["abc", "ded"]; //["*****", "*abc*", "*ded*", "*****"]
// const picture = ["a"]; // ["***", "*a*", "***"]
// const picture = ["aa", "**", "zz"]; //["****", "*aa*", "****", "*zz*", "****"]
const picture = ["abcde", "fghij", "klmno", "pqrst", "uvwxy"]; //["*******", "*abcde*", "*fghij*", "*klmno*", "*pqrst*", "*uvwxy*", "*******"]
// const picture = ["wzy**"]; // ["*******", "*wzy***", "*******"]

function solution(picture) {
  const length = picture[0].length;
  const word_br = picture.map((i) => `*${i}*`);
  const br = new Array(length + 2).fill("*").join("");
  return [br, ...word_br, br];
}

console.log(solution(picture));

// solution(a);

// done, self, documentation
