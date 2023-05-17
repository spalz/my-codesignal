const yourLeft = 10,
  yourRight = 15,
  friendsLeft = 15,
  friendsRight = 10;

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft && yourRight === friendsRight) {
    return true;
  } else if (yourLeft === friendsRight && yourRight === friendsLeft) {
    return true;
  }
  return false;
}

console.log(solution(yourLeft, yourRight, friendsLeft, friendsRight));

// done, salf
