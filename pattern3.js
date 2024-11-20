let pattern = "";
let value;

function pattern3(variable) {
  for (var i = 1; i <= variable; i++) {
    for (var j = 1; j <= i; j++) {
      value = j;
      pattern += value + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern3(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
