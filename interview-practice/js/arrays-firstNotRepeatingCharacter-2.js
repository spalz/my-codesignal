const a = "abacabad"; // c
// const a = "abacabaabacaba"; // _
// const a = "z"; // z
// const a = "bcb"; // c
// const a = "bcccccccb"; // _
// const a = "abcdefghijklmnopqrstuvwxyziflskecznslkjfabe"; // d
// const a = "zzz"; // _
// const a = "bcccccccccccccyb"; // y
// const a = "xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc"; // d
// const a = "ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof"; // g

function solution(a) {
  for (key of a) {
    if (a.indexOf(key) === a.lastIndexOf(key)) {
      return key;
    }
  }
  return "_";
}

// solution(a);
console.log(solution(a));

// dont self
