let pattern = "";

function pattern6(limit) {
  for (var i = 0; i <= limit; i++) {
    for (var j = 1; j <= limit - i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
pattern6(5);

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
