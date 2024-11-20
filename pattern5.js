let pattern = "";

function pattern5(limit) {
  for (var i = 0; i <= limit; i++) {
    for (var j = 0; j < limit - i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
pattern5(5);

// * * * * *
// * * * *
// * * *
// * *
// *
