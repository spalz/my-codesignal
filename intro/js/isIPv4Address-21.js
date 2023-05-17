const inputString = "172.16.254.1"; //true
// const inputString = "172.316.254.1"; //false
// const inputString = ".254.255.0"; //false
// const inputString = "1.1.1.1a"; //false
// const inputString = "1"; //false
// const inputString = "0.254.255.0"; //true
// const inputString = "1.23.256.255."; //false
// const inputString = "1.23.256.."; //false
// const inputString = "0..1.0"; //false
// const inputString = "64.233.161.00"; //false
// const inputString = "64.00.161.131"; //false
// const inputString = "01.233.161.131"; //false
// const inputString = "35..36.9.9.0"; //false
// const inputString = "1.1.1.1.1"; //false
// const inputString = "1.256.1.1"; //false
// const inputString = "a0.1.1.1"; //false
// const inputString = "0.1.1.256"; //false
// const inputString = "129380129831213981.255.255.255"; //false
// const inputString = "255.255.255.255abcdekjhf"; //false
// const inputString = "7283728"; //false

function solution(inputString) {
  const regxp = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/gm;
  if (regxp.exec(inputString)) {
    return true;
  } else {
    return false;
  }
}

console.log(solution(inputString));

// done, self, fifty-fifty, find regexp
