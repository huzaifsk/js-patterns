let pattern = "";

function pattern8(limit) {
  for (var i = 0; i < limit; i++) {
    for (var j = 0; j < i; j++) {
      pattern += " ";
    }
    for (var j = 0; j < 2 * limit - (2 * i + 1); j++) {
      pattern += "*";
    }
    for (var j = 0; j < i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
pattern8(5);

// *********
//  *******
//   *****
//    ***
//     *
