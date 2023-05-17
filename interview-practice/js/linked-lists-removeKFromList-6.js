const l = [3, 1, 2, 3, 4, 5];
const k = 3;

solution = (l, k) => {
  const n = [...l]
  return n.filter((i) => i !== k);
};

// solution(l, k);
console.log(solution(l, k));

//
