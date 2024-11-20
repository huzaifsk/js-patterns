let pattern = "";
let value = 0;

function pattern4(limit) {
  for (var i = 1; i <= limit; i++) {
    for (var j = 1; j <= i; j++) {
      value = i;
      pattern += value + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern4(5);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
