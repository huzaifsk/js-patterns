let pattern = "";

function pattern22(limit) {
  for (let i = 0; i < 2 * limit - 1; i++) {
    for (let j = 0; j < 2 * limit - 1; j++) {
      let top = i;
      let left = j;
      let right = 2 * limit - 2 - j;
      let bottom = 2 * limit - 2 - i;
      pattern += limit - Math.min(Math.min(top, bottom), Math.min(left, right));
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern22(5);

// 555555555
// 544444445
// 543333345
// 543222345
// 543212345
// 543222345
// 543333345
// 544444445
// 555555555
