// let s1 = "zzzz";
// let s2 = "zzzzzzz";

let s1 = "aabcc";
let s2 = "adcaa";

function solution(s1, s2) {
  let count = 0;
  for (let a = 0; a < s1.length; a++) {
    let b = s2.indexOf(s1[a]);
    if (b >= 0) {
      count++;
      s2 = s2.replace(s1[a], "");
    }
  }
  return count;
}

solution(s1, s2);

//done, hints, https://wachino.github.io/codefights/codefights-arcade/codefights-arcade-intro/10_commonCharacterCount/README.html
