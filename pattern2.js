let pattern = "";
let val = "*";

function pattern2(variable) {
  for (var i = 1; i <= variable; i++) {
    for (var j = 1; j <= variable; j++) {
      pattern += val + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

pattern2(5);

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
